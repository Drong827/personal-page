let editMode = false;

// 编辑模式切换
document.getElementById('editModeBtn').addEventListener('click', function() {
    editMode = !editMode;
    this.textContent = editMode ? '保存修改' : '编辑模式';
    
    if (editMode) {
        enableEditing();
    } else {
        disableEditing();
        saveChanges();
    }
});

// 启用编辑模式
function enableEditing() {
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        element.contentEditable = true;
        element.style.border = '1px dashed #1976d2';
        element.style.padding = '2px 4px';
        element.style.borderRadius = '4px';
    });
}

// 禁用编辑模式
function disableEditing() {
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        element.contentEditable = false;
        element.style.border = 'none';
        element.style.padding = '0';
    });
}

// 保存修改
function saveChanges() {
    // 这里可以添加保存逻辑，比如存储到本地存储
    localStorage.setItem('personalWebsiteData', JSON.stringify({
        name: document.getElementById('name').textContent,
        tags: Array.from(document.querySelectorAll('.tag')).map(tag => tag.textContent),
        avatar: document.getElementById('avatar').style.backgroundImage
    }));
    
    alert('修改已保存！');
}

// 头像上传
document.getElementById('avatarEditBtn').addEventListener('click', function() {
    document.getElementById('avatarInput').click();
});

document.getElementById('avatarInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function() {
            const avatar = document.getElementById('avatar');
            avatar.style.backgroundImage = `url(${reader.result})`;
            avatar.style.color = 'transparent';
        };
        reader.readAsDataURL(file);
    }
});

// 添加标签
document.getElementById('addTagBtn').addEventListener('click', function() {
    const tagsContainer = document.getElementById('tags');
    const newTag = document.createElement('span');
    newTag.className = 'tag editable';
    newTag.textContent = '新标签';
    newTag.contentEditable = editMode;
    if (editMode) {
        newTag.style.border = '1px dashed #1976d2';
        newTag.style.padding = '2px 4px';
        newTag.style.borderRadius = '4px';
    }
    tagsContainer.insertBefore(newTag, this);
});

// 添加技能
document.getElementById('addSkillBtn').addEventListener('click', function() {
    const skillsContainer = document.getElementById('skills');
    const newSkill = document.createElement('div');
    newSkill.className = 'skill-item editable';
    newSkill.innerHTML = '新技能 <span class="skill-level">了解</span>';
    newSkill.contentEditable = editMode;
    if (editMode) {
        newSkill.style.border = '1px dashed #1976d2';
        newSkill.style.padding = '2px 4px';
        newSkill.style.borderRadius = '4px';
    }
    skillsContainer.insertBefore(newSkill, this);
});

// 添加联系方式
document.getElementById('addContactBtn').addEventListener('click', function() {
    const contactContainer = document.getElementById('contactInfo');
    const newContact = document.createElement('div');
    newContact.className = 'contact-item editable';
    newContact.innerHTML = '<span>📧</span><span>新邮箱</span>';
    newContact.contentEditable = editMode;
    if (editMode) {
        newContact.style.border = '1px dashed #1976d2';
        newContact.style.padding = '2px 4px';
        newContact.style.borderRadius = '4px';
    }
    contactContainer.insertBefore(newContact, this);
});

// 添加经历
document.getElementById('addExperienceBtn').addEventListener('click', function() {
    const section = this.parentElement;
    const newExperience = document.createElement('div');
    newExperience.className = 'experience-item editable';
    newExperience.innerHTML = '<div class="experience-title">新经历</div><div class="experience-desc">描述</div>';
    newExperience.contentEditable = editMode;
    if (editMode) {
        newExperience.style.border = '1px dashed #1976d2';
        newExperience.style.padding = '2px 4px';
        newExperience.style.borderRadius = '4px';
    }
    section.insertBefore(newExperience, this);
});

// 添加获奖
document.getElementById('addAwardBtn').addEventListener('click', function() {
    const section = this.parentElement;
    const newAward = document.createElement('div');
    newAward.className = 'info-item';
    newAward.innerHTML = '<span class="info-label">新获奖：</span><span class="info-value editable">获奖内容</span>';
    if (editMode) {
        const editableElement = newAward.querySelector('.editable');
        editableElement.contentEditable = true;
        editableElement.style.border = '1px dashed #1976d2';
        editableElement.style.padding = '2px 4px';
        editableElement.style.borderRadius = '4px';
    }
    section.insertBefore(newAward, this);
});

// 添加项目
document.getElementById('addProjectBtn').addEventListener('click', function() {
    const section = this.parentElement;
    const newProject = document.createElement('div');
    newProject.className = 'experience-item editable';
    newProject.innerHTML = '<div class="experience-title">新项目</div><div class="experience-desc">描述</div>';
    newProject.contentEditable = editMode;
    if (editMode) {
        newProject.style.border = '1px dashed #1976d2';
        newProject.style.padding = '2px 4px';
        newProject.style.borderRadius = '4px';
    }
    section.insertBefore(newProject, this);
});

// 添加学习计划
document.getElementById('addPlanBtn').addEventListener('click', function() {
    const section = this.parentElement;
    const newPlan = document.createElement('div');
    newPlan.className = 'info-item';
    newPlan.innerHTML = '<span class="info-label">新计划：</span><span class="info-value editable">计划内容</span>';
    if (editMode) {
        const editableElement = newPlan.querySelector('.editable');
        editableElement.contentEditable = true;
        editableElement.style.border = '1px dashed #1976d2';
        editableElement.style.padding = '2px 4px';
        editableElement.style.borderRadius = '4px';
    }
    section.insertBefore(newPlan, this);
});

// 添加爱好
document.getElementById('addHobbyBtn').addEventListener('click', function() {
    const hobbiesContainer = document.getElementById('hobbies');
    const newHobby = document.createElement('span');
    newHobby.className = 'hobby-item editable';
    newHobby.textContent = '新爱好';
    newHobby.contentEditable = editMode;
    if (editMode) {
        newHobby.style.border = '1px dashed #1976d2';
        newHobby.style.padding = '2px 4px';
        newHobby.style.borderRadius = '4px';
    }
    hobbiesContainer.insertBefore(newHobby, this);
});

// 加载保存的数据
function loadSavedData() {
    const savedData = localStorage.getItem('personalWebsiteData');
    if (savedData) {
        const data = JSON.parse(savedData);
        if (data.name) {
            document.getElementById('name').textContent = data.name;
        }
        if (data.avatar) {
            const avatar = document.getElementById('avatar');
            avatar.style.backgroundImage = data.avatar;
            avatar.style.color = 'transparent';
        }
    }
}

// 初始化
loadSavedData();