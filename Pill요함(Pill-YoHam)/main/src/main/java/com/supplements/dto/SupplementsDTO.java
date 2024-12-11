package com.supplements.dto;

public class SupplementsDTO {
    private String id;
    private ItemDTO item; // ItemDTO 타입의 필드 추가

    // id의 getter와 setter
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    // item의 getter와 setter
    public ItemDTO getItem() {
        return item;
    }

    public void setItem(ItemDTO item) {
        // 제품명 길이 제한 처리
        if (item != null && item.getItemName() != null && item.getItemName().length() > 20) {
            item.setItemName(item.getItemName().substring(0, 20) + "...");
        }
        this.item = item;
    }
}