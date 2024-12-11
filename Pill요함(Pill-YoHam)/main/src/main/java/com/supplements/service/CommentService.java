package com.supplements.service;

import com.supplements.document.Comment;
import com.supplements.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {

    private final CommentRepository commentRepository;

    @Autowired
    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    // Fetch all comments for a specific item
    public List<Comment> getCommentsByItemSeq(String itemSeq) {
        return commentRepository.findByItemSeq(itemSeq);
    }

    // Add or update a comment
    public Comment saveComment(Comment comment) {
        return commentRepository.save(comment);
    }

    // Delete a comment
    public void deleteComment(String commentId) {
        commentRepository.deleteById(commentId);
    }
}