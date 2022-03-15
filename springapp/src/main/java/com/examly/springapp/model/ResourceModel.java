package com.examly.springapp.model;

import java.util.Date;

public class ResourceModel {
	private long id;
	
	private String resourceId;
	private String resourceName;
	private String resourceLink;
	private String imageUrl;
	private String resourceCategory;
	private Date createdOn;
	private UserModel createdBy;
	private boolean verified;
	private boolean active;
	
	public ResourceModel(){
		
	}
	
	public ResourceModel(String resourceId, String resourceName, String resourceLink, String imageUrl,
			String resourceCategory, Date createdOn, UserModel createdBy, boolean verified, boolean active) {
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

	public long getId() {
		return id;
	}

	public void setId(long id) {
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

	public UserModel getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(UserModel createdBy) {
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
