package com.linkedlist;

public class LinkedList<T> {

    private LinkedListNode<T> init = null;
    private LinkedListNode<T> end = null;

    public boolean add(T node) {
        if(init == null) {
            this.init = new LinkedListNode<T>(node);
        }
        else {
            LinkedListNode it = init;
            while(it.hasNext()) {
                it = it.getNext();
            }
            it.setNext(new LinkedListNode<T>(node));
            it.getNext().setLast(it);
        }
        return true;
    }

    public void printList() {
        if(init == null) System.out.println("The list is empty.");
        LinkedListNode it = init;
        System.out.print("List: " + init.getVal() + " ");
        while(it.hasNext()) {
            it = it.getNext();
            System.out.print(it.getVal() + " ");
        }
    }

}
