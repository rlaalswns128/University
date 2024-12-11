package com.supplements.controller;

import com.supplements.dto.SupplementsDTO;
import com.supplements.dto.CommentDTO;
import com.supplements.service.SearchService;
import com.supplements.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.stream.Collectors;

@Controller
public class SearchController {

    private final SearchService searchService;
    private final CommentService commentService;

    @Autowired
    public SearchController(SearchService searchService, CommentService commentService) {
        this.searchService = searchService;
        this.commentService = commentService;
    }

    /**
     * 검색 기능 - ITEM_NAME, CLASS_NO_NAME 기준으로 검색
     */
    @GetMapping("/search")
    public String search(
            @RequestParam("query") String query,
            @RequestParam(value = "page", defaultValue = "0") int page,
            @RequestParam(value = "size", defaultValue = "10") int size,
            Model model) {

        // 검색 결과 가져오기
        List<SupplementsDTO> results = searchService.search(query);
        int totalResults = results.size();

        // 페이징 처리
        int start = page * size;
        int end = Math.min(start + size, totalResults);
        List<SupplementsDTO> pagedResults = results.subList(start, end);

        // 페이지 관련 정보 계산
        int totalPages = (totalResults + size - 1) / size;
        int startPage = (page / 10) * 10; // 현재 페이지 그룹의 첫 페이지
        int endPage = Math.min(startPage + 9, totalPages - 1); // 현재 페이지 그룹의 마지막 페이지

        // 모델에 데이터 추가
        model.addAttribute("results", pagedResults);
        model.addAttribute("query", query);
        model.addAttribute("currentPage", page);
        model.addAttribute("totalPages", totalPages);
        model.addAttribute("startPage", startPage);
        model.addAttribute("endPage", endPage);

        return "searchResults";
    }

    /**
     * 제품 상세 페이지
     */
    @GetMapping("/itemDescription")
    public String itemDescription(@RequestParam("itemSeq") String itemSeq, Model model) {
        // 제품 상세 정보 조회
        SupplementsDTO item = searchService.getItemByItemSeq(itemSeq);
        if (item == null) {
            return "errorPage"; // 아이템이 없을 경우 에러 페이지로 이동
        }

        // 댓글 조회 및 변환
        List<CommentDTO> comments = commentService.getCommentsByItemSeq(itemSeq).stream()
                .map(comment -> {
                    CommentDTO dto = new CommentDTO();
                    dto.setUsername(comment.getUsername());
                    dto.setContent(comment.getContent());
                    dto.setRating(comment.getRating());
                    return dto;
                })
                .collect(Collectors.toList());

        // 모델에 데이터 추가
        model.addAttribute("item", item.getItem());    // 상세 페이지용 아이템 정보
        model.addAttribute("comments", comments);     // 댓글 목록

        return "itemDescription"; // 제품 상세 정보를 보여줄 JSP 파일 이름
    }
}