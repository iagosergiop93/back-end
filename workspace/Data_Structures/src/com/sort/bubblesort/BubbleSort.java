package com.sort.bubblesort;

import java.util.Comparator;
import java.util.List;

public class BubbleSort<T> {

    public List<T> sort(List<T> list, Comparator<T> comparator) {
        boolean changed = true;
        while(changed) {
            changed = false;
            for(int i=1;i<list.size();i++) {
                if(comparator.compare(list.get(i-1), list.get(i)) > 0) {
                    swap(list, i);
                    changed = true;
                }
            }
        }
        return list;
    }

    private void swap(List<T> list, int idx) {
        T temp = null;
        temp = list.get(idx);
        list.set(idx, list.get(idx-1));
        list.set(idx-1, temp);
    }

}
