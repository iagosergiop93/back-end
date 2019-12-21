package com.linkedlist;

public class LinkedListNode<T> {

    private T val = null;
    private LinkedListNode<T> next = null;
    private LinkedListNode<T> last = null;

    public LinkedListNode(T node) {
        this.val = node;
    }

    public T getVal() {
        return val;
    }

    public LinkedListNode<T> getNext() {
        return next;
    }

    public boolean hasNext() {
        if(next != null) return true;
        return false;
    }

    public LinkedListNode<T> getLast() {
        return last;
    }

    public void setNode(T node) {
        this.val = node;
    }

    public void setNext(LinkedListNode<T> next) {
        this.next = next;
    }

    public void setLast(LinkedListNode<T> last) {
        this.last = last;
    }
}
