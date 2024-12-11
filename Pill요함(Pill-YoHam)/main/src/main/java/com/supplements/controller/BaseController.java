package com.supplements.controller;

import com.supplements.dto.CategoryDTO;
import com.supplements.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ModelAttribute;

import java.util.List;

@ControllerAdvice
public class BaseController {

    private final CategoryService categoryService;

    @Autowired
    public BaseController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    /**
     * 네비게이션 바에서 사용할 카테고리 리스트 설정
     */
    @ModelAttribute("categoryList")
    public List<CategoryDTO> populateCategories() {
        return categoryService.getAllCategories(); // 모든 카테고리 데이터 반환
    }
}