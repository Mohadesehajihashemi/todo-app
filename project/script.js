// بارگذاری نظرات از localStorage
function loadComments() {
  const comments = JSON.parse(localStorage.getItem('comments')) || [];
  const commentList = document.getElementById('commentList');
  commentList.innerHTML = '';  // پاک کردن لیست نظرات قبلی
  comments.forEach((comment, index) => {
    const li = document.createElement('li');
    li.textContent = comment;  // نمایش متن نظر
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'حذف';
    deleteButton.classList.add('delete');
    deleteButton.onclick = () => deleteComment(index);
    li.appendChild(deleteButton);
    commentList.appendChild(li);
  });
}

// اضافه کردن نظر جدید
function addComment() {
  const commentInput = document.getElementById('commentInput');
  const comment = commentInput.value.trim();  // حذف فاصله‌های اضافی

  if (comment === "") {
    alert("لطفاً نظر خود را وارد کنید!");  // نمایش پیام خطا اگر ورودی خالی باشد
  } else {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
    commentInput.value = '';  // پاک کردن ورودی پس از اضافه کردن نظر
    loadComments();  // بارگذاری مجدد نظرات
  }
}

// حذف نظر
function deleteComment(index) {
  const comments = JSON.parse(localStorage.getItem('comments')) || [];
  comments.splice(index, 1);  // حذف نظر با استفاده از ایندکس
  localStorage.setItem('comments', JSON.stringify(comments));
  loadComments();  // بارگذاری مجدد نظرات
}

// بارگذاری نظرات هنگام بارگذاری صفحه
loadComments();
