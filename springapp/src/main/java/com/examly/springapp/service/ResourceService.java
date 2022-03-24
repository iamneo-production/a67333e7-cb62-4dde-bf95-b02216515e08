package com.examly.springapp.service;

import com.examly.springapp.model.ResourceModel;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.repository.ResourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResourceService {
    @Autowired
    private ResourceRepository resourceRepository;
    public ResourceModel saveResource(ResourceModel res){
        return resourceRepository.save(res);
    }
    public List<ResourceModel> saveResources(List<ResourceModel> res){
        return resourceRepository.saveAll(res);
    }
    public List<ResourceModel> getResource(){
        return resourceRepository.findAll();
    }
    public ResourceModel getResourceById(int id){
        return resourceRepository.findById(id).orElse(null);
    }
    public String deleteResource(int id){
        resourceRepository.deleteById(id);
        return "resource removed of id"+id;
    }
    public String updateResource(int id,ResourceModel res){
        ResourceModel existingRes= resourceRepository.findAllById(id);
        if(existingRes==null){
            return "Resource Not Found";
        }
        else {
            existingRes.setResourceName(res.getResourceName());
            existingRes.setResourceLink(res.getResourceLink());
            existingRes.setImageUrl(res.getImageUrl());
            existingRes.setResourceCategory(res.getResourceCategory());
            existingRes.setCreatedOn(res.getCreatedOn());
            existingRes.setCreatedBy(res.getCreatedBy());
            existingRes.setVerified(res.isVerified());
            existingRes.setActive(res.isActive());
            resourceRepository.save(existingRes);
            return "Resource Updated";
        }
    }
}
