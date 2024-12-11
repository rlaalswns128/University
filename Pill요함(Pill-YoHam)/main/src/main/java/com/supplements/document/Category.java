package com.supplements.document;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "category")
public class Category {
    @Id
    private String id;

    @Field("CLASS_NO")
    private String classNo;

    @Field("CLASS_NO_NAME")
    private String classNoName;

    @Field("CATEGORY_NAME")
    private String categoryName; // 대분류 이름

    @Field("CATEGORY_CODE")
    private String categoryCode; // 대분류 코드

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getClassNo() {
        return classNo;
    }

    public void setClassNo(String classNo) {
        this.classNo = classNo;
    }

    public String getClassNoName() {
        return classNoName;
    }

    public void setClassNoName(String classNoName) {
        this.classNoName = classNoName;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public String getCategoryCode() {
        return categoryCode;
    }

    public void setCategoryCode(String categoryCode) {
        this.categoryCode = categoryCode;
    }
}