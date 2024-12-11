package com.supplements.document;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Field;

public class Supplements {

    @Id
    private String id;

    @Field("item")
    private Item item;

    // 기본 생성자
    public Supplements() {}

    // id의 getter와 setter
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    // item의 getter와 setter
    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }
}