package com.supplements.repository;

import com.supplements.document.Category;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends MongoRepository<Category, String> {

    /**
     * CATEGORY_NO를 기반으로 CLASS_NO 목록 조회
     */
    List<Category> findByCategoryCode(String categoryCode);
}