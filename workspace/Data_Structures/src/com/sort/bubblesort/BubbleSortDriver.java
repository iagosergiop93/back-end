package com.sort.bubblesort;

import com.comparators.StudentComparator;
import com.models.Student;

import java.util.ArrayList;
import java.util.List;

public class BubbleSortDriver {

    public static void main(String[] args) {
        int num = 0;
        List<Student> list = new ArrayList<>();

        for(int i=0;i<10;i++) {
            num = (int) (Math.random()*100) + 1;
            list.add(new Student(num));
        }

        printList(list);

        // BubbleSort
        BubbleSort bbSort = new BubbleSort();
        StudentComparator studentComparator = new StudentComparator();
        list = bbSort.sort(list, studentComparator);

        System.out.println("\nAfter sort");

        printList(list);

    }

    public static void printList(List<Student> list) {
        System.out.print("List: ");
        for(Student item : list) {
            System.out.print(item.getId() + " ");
        }
    }

}
