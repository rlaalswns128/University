package com.supplements.dto;

public class CategoryDTO {
    private String classNo;
    private String classNoName;
    private String categoryName; // 대분류 이름
    private String categoryCode; // 대분류 코드

    // 생성자
    public CategoryDTO(String classNo, String classNoName, String categoryName, String categoryCode) {
        this.classNo = classNo;
        this.classNoName = classNoName;
        this.categoryName = categoryName;
        this.categoryCode = categoryCode;
    }

    // Getters and Setters
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