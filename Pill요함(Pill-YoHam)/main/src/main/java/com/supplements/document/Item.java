package com.supplements.document;

import org.springframework.data.mongodb.core.mapping.Field;

public class Item {
    @Field("ITEM_SEQ")
    private String itemSeq;

    @Field("ITEM_NAME")
    private String itemName;

    @Field("ENTP_NAME")
    private String entpName;

    @Field("ITEM_PERMIT_DATE")
    private String itemPermitDate;

    @Field("ITEM_NO")
    private String itemNo;

    @Field("CANCEL_CODE_NAME")
    private String cancelCodeName;

    @Field("CANCEL_DATE")
    private String cancelDate;

    @Field("MAIN_INGR")
    private String mainIngr;

    @Field("ADIT_INGR")
    private String aditIngr;

    @Field("CLASS_NO")
    private String classNo;

    @Field("CLASS_NO_NAME")
    private String classNoName;

    @Field("PERMIT_KIND_CODE_NM")
    private String permitKindCodeNm;

    @Field("INDUTY_CODE")
    private String indutyCode;

    @Field("MANUF_COUNTRY_NAMES")
    private String manufCountryNames;

    @Field("EE_DOC_DATA")
    private String eeDocData;

    @Field("UD_DOC_DATA")
    private String udDocData;

    @Field("NB_DOC_DATA")
    private String nbDocData;

    @Field("ENTP_NO")
    private String entpNo;

    @Field("ENTP_SEQ")
    private String entpSeq;

    @Field("BIZRNO")
    private String bizrno;

    // Getters and Setters
    public String getItemSeq() {
        return itemSeq;
    }

    public void setItemSeq(String itemSeq) {
        this.itemSeq = itemSeq;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getEntpName() {
        return entpName;
    }

    public void setEntpName(String entpName) {
        this.entpName = entpName;
    }

    public String getItemPermitDate() {
        return itemPermitDate;
    }

    public void setItemPermitDate(String itemPermitDate) {
        this.itemPermitDate = itemPermitDate;
    }

    public String getItemNo() {
        return itemNo;
    }

    public void setItemNo(String itemNo) {
        this.itemNo = itemNo;
    }

    public String getCancelCodeName() {
        return cancelCodeName;
    }

    public void setCancelCodeName(String cancelCodeName) {
        this.cancelCodeName = cancelCodeName;
    }

    public String getCancelDate() {
        return cancelDate;
    }

    public void setCancelDate(String cancelDate) {
        this.cancelDate = cancelDate;
    }

    public String getMainIngr() {
        return mainIngr;
    }

    public void setMainIngr(String mainIngr) {
        this.mainIngr = mainIngr;
    }

    public String getAditIngr() {
        return aditIngr;
    }

    public void setAditIngr(String aditIngr) {
        this.aditIngr = aditIngr;
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

    public String getPermitKindCodeNm() {
        return permitKindCodeNm;
    }

    public void setPermitKindCodeNm(String permitKindCodeNm) {
        this.permitKindCodeNm = permitKindCodeNm;
    }

    public String getIndutyCode() {
        return indutyCode;
    }

    public void setIndutyCode(String indutyCode) {
        this.indutyCode = indutyCode;
    }

    public String getManufCountryNames() {
        return manufCountryNames;
    }

    public void setManufCountryNames(String manufCountryNames) {
        this.manufCountryNames = manufCountryNames;
    }

    public String getEeDocData() {
        return eeDocData;
    }

    public void setEeDocData(String eeDocData) {
        this.eeDocData = eeDocData;
    }

    public String getUdDocData() {
        return udDocData;
    }

    public void setUdDocData(String udDocData) {
        this.udDocData = udDocData;
    }

    public String getNbDocData() {
        return nbDocData;
    }

    public void setNbDocData(String nbDocData) {
        this.nbDocData = nbDocData;
    }

    public String getEntpNo() {
        return entpNo;
    }

    public void setEntpNo(String entpNo) {
        this.entpNo = entpNo;
    }

    public String getEntpSeq() {
        return entpSeq;
    }

    public void setEntpSeq(String entpSeq) {
        this.entpSeq = entpSeq;
    }

    public String getBizrno() {
        return bizrno;
    }

    public void setBizrno(String bizrno) {
        this.bizrno = bizrno;
    }
}