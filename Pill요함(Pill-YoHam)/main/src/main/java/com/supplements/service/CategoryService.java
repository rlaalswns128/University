package com.supplements.service;

import com.supplements.document.Category;
import com.supplements.dto.CategoryDTO;
import com.supplements.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.stream.Stream;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;

    @Autowired
    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    /**
     * CATEGORY_NO에 해당하는 모든 CLASS_NO를 반환
     */
    public List<String> getClassNosByCategoryCode(String categoryCode) {
        return categoryRepository.findByCategoryCode(categoryCode)
                .stream()
                .map(Category::getClassNo)
                .collect(Collectors.toList());
    }

    /**
     * 중복 제거 후 모든 카테고리를 반환
     */
    public List<CategoryDTO> getAllCategories() {
        return categoryRepository.findAll()
                .stream()
                .collect(Collectors.toMap(
                        Category::getCategoryCode,  // 키: CATEGORY_CODE
                        category -> category,      // 값: Category 객체
                        (existing, replacement) -> replacement // 중복 발생 시 최신 값 사용
                ))
                .values()
                .stream()
                .map(category -> new CategoryDTO(
                        category.getClassNo(),
                        category.getClassNoName(),
                        category.getCategoryName(),
                        category.getCategoryCode()
                ))
                .collect(Collectors.toList());
    }
}