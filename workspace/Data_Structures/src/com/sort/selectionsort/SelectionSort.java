package com.sort.selectionsort;

import java.util.Comparator;
import java.util.List;

public class SelectionSort<T> {

    public List<T> sort(List<T> list, Comparator<T> comparator) {
        T min = null;
        int pos = 0;
        for(int i=0;i<list.size();i++) {
            min = list.get(pos);
            for(int j=pos;j<list.size();j++) {
                if(comparator.compare(list.get(j), min) < 0) {
                    swap(list, j, pos);
                    min = list.get(pos);
                }
            }
            pos++;
        }
        return list;
    }

    private void swap(List<T> list, int idx1, int idx2) {
        T temp = list.get(idx1);
        list.set(idx1, list.get(idx2));
        list.set(idx2, temp);
    }
}
