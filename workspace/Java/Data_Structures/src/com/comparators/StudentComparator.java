package com.comparators;

import com.models.Student;

import java.util.Comparator;

public class StudentComparator implements Comparator<Student> {

    @Override
    public int compare(Student o1, Student o2) {
        // id
        int res = o1.getId() - o2.getId();
        return res;

        // first name

        // last name
    }
}
