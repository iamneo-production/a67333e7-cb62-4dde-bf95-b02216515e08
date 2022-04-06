package com.examly.springapp.model;

import org.hibernate.annotations.GenericGenerator;

import java.util.*;
import javax.persistence.*;

@Entity
@Table(name = "resources")
public class ResourceModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;

	@Column(name = "resourceId")
	private String resourceId;
	
	@Column(name = "resourceName")
	private String resourceName;
	
	@Column(name = "resourceLink")
	private String resourceLink;
	
	@Column(name = "imageUrl")
	private String imageUrl;
	
	@Column(name = "resourceCategory")
	private String resourceCategory;
	
	@Column(name = "createdOn")
	private Date createdOn;

	@Column(name = "createdBy")
	private String createdBy;
	
	@Column(name = "verified")
	private boolean verified;
	
	@Column(name = "active")
	private boolean active;
	
	public ResourceModel(){
		
	}
	
	public ResourceModel(String resourceId, String resourceName, String resourceLink, String imageUrl,
			String resourceCategory, Date createdOn, String createdBy, boolean verified, boolean active) {
		super();
		this.resourceId = resourceId;
		this.resourceName = resourceName;
		this.resourceLink = resourceLink;
		this.imageUrl = imageUrl;
		this.resourceCategory = resourceCategory;
		this.createdOn = createdOn;
		this.createdBy = createdBy;
		this.verified = verified;
		this.active = active;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getResourceId() {
		return resourceId;
	}

	public void setResourceId(String resourceId) {
		this.resourceId = resourceId;
	}

	public String getResourceName() {
		return resourceName;
	}

	public void setResourceName(String resourceName) {
		this.resourceName = resourceName;
	}

	public String getResourceLink() {
		return resourceLink;
	}

	public void setResourceLink(String resourceLink) {
		this.resourceLink = resourceLink;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public String getResourceCategory() {
		return resourceCategory;
	}

	public void setResourceCategory(String resourceCategory) {
		this.resourceCategory = resourceCategory;
	}

	public Date getCreatedOn() {
		return createdOn;
	}

	public void setCreatedOn(Date createdOn) {
		this.createdOn = createdOn;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public boolean isVerified() {
		return verified;
	}

	public void setVerified(boolean verified) {
		this.verified = verified;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}
}
