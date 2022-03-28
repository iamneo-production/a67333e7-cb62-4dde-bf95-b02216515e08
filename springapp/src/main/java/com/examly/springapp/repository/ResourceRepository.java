package com.examly.springapp.repository;

import com.examly.springapp.model.ResourceModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;
@Repository
public interface ResourceRepository extends JpaRepository<ResourceModel, Integer> {
    ResourceModel findAllById(int id);
}
