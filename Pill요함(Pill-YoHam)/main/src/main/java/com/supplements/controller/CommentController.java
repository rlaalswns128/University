package com.supplements.controller;

import com.supplements.document.Comment;
import com.supplements.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/comments")
public class CommentController {

    private final CommentService commentService;

    @Autowired
    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    // Add a comment
    @PostMapping("/add")
    public String addComment(@RequestParam String itemSeq, @RequestParam String username,
                             @RequestParam String content, @RequestParam int rating) {
        Comment comment = new Comment();
        comment.setItemSeq(itemSeq);
        comment.setUsername(username);
        comment.setContent(content);
        comment.setRating(rating);
        commentService.saveComment(comment);
        return "redirect:/itemDescription/" + itemSeq; // Redirect to item description
    }

    // Delete a comment
    @PostMapping("/delete/{commentId}")
    public String deleteComment(@PathVariable String commentId, @RequestParam String itemSeq) {
        commentService.deleteComment(commentId);
        return "redirect:/itemDescription/" + itemSeq;
    }

    // Update a comment
    @PostMapping("/edit/{commentId}")
    public String editComment(@PathVariable String commentId, @RequestParam String content,
                              @RequestParam int rating, @RequestParam String itemSeq) {
        Comment comment = new Comment();
        comment.setId(commentId);
        comment.setContent(content);
        comment.setRating(rating);
        commentService.saveComment(comment);
        return "redirect:/itemDescription/" + itemSeq;
    }
}