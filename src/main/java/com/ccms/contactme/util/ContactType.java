package com.ccms.contactme.util;

public enum ContactType {
    DAILY("daily", 0),
    BIWEEKLY("biWeekly", 1),
    MONTHLY("monthly", 2);

    private final String value;
    private final int key;

    ContactType(String value, int key){
        this.value = value;
        this.key = key;
    }

    public String getValue(){
        return this.value;
    }

    public int getKey(){
        return this.key;
    }
}
