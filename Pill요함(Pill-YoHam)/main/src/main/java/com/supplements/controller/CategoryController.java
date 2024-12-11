package com.supplements.controller;

import com.supplements.dto.SupplementsDTO;
import com.supplements.service.CategoryService;
import com.supplements.service.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class CategoryController {

    private final CategoryService categoryService;
    private final SearchService searchService;

    @Autowired
    public CategoryController(CategoryService categoryService, SearchService searchService) {
        this.categoryService = categoryService; // final 변수는 생성자에서 초기화
        this.searchService = searchService;
    }

    /**
     * 특정 카테고리 버튼 클릭 시 CLASS_NO로 제품 조회
     */
    @GetMapping("/category")
    public String getProductsByCategory(
            @RequestParam("categoryCode") String categoryCode,
            @RequestParam(value = "page", defaultValue = "0") int page,
            @RequestParam(value = "size", defaultValue = "10") int size,
            Model model) {

        // ClassNo 가져오기
        List<String> classNos = categoryService.getClassNosByCategoryCode(categoryCode);

        // ClassNo에 해당하는 제품 조회
        List<SupplementsDTO> products = searchService.findByClassNo(classNos);
        int totalProducts = products.size();

        // 페이징 처리
        int start = page * size;
        int end = Math.min(start + size, totalProducts);
        List<SupplementsDTO> pagedProducts = products.subList(start, end);

        // 페이지 관련 정보 계산
        int totalPages = (totalProducts + size - 1) / size;
        int startPage = (page / 10) * 10; // 현재 페이지 그룹의 첫 페이지
        int endPage = Math.min(startPage + 9, totalPages - 1); // 현재 페이지 그룹의 마지막 페이지

        // 모델에 데이터 추가
        model.addAttribute("products", pagedProducts);
        model.addAttribute("categoryCode", categoryCode);
        model.addAttribute("currentPage", page);
        model.addAttribute("totalPages", totalPages);
        model.addAttribute("startPage", startPage);
        model.addAttribute("endPage", endPage);

        return "categoryResults";
    }
}