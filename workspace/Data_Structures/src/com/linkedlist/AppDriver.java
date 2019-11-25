package com.linkedlist;

import com.linkedlist.LinkedList;

public class AppDriver {

    public static void main(String[] args) {
        LinkedList<String> list = new LinkedList<>();
        list.add("a");
        list.add("a");
        list.add("b");
        list.add("b");
        list.add("c");
        list.add("c");

        list.printList();
    }

}
