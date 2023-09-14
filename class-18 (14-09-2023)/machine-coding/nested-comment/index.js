const commentContainer = document.getElementById("commentContainer");

const createElement = (elementType = "div", properties, ...children) => {
  const element = document.createElement(elementType);
  for (let key in properties) {
    element[key] = properties[key];
  }

  children.forEach((child) => element.append(child));

  return element;
};

const createComment = (name, text) => {
  const p1 = createElement("p", {
    innerText: name,
    className: "text-bold name",
  });
  const p2 = createElement("p", { innerText: text, className: "content-text" });
  const replyBtn = createElement("button", {
    textContent: "Reply",
    className: "reply",
  });

  const mainComment = createElement(
    "div",
    { className: "main-comment" },
    p1,
    p2,
    replyBtn
  );
  const subComments = createElement("div", { className: "sub-comments" });

  const comment = createElement(
    "div",
    { className: "comment" },
    mainComment,
    subComments
  );
  return comment;
};

const createCommentInput = () => {
  const nameInput = createElement("input", {
    type: "text",
    placeholder: "Your name",
    className: "text-name name",
  });
  const commentInput = createElement("textarea", {
    placeholder: "Your comment",
    className: "comment-text",
    rows: 2,
    cols: 30,
  });

  const postBtn = createElement("button", {
    textContent: "Post",
    className: "post",
  });
  const cancelBtn = createElement("button", {
    textContent: "Cancel",
    className: "cancel",
  });
  const btnHolder = createElement(
    "div",
    { className: "btn-holder" },
    postBtn,
    cancelBtn
  );

  const commentInputContainer = createElement(
    "div",
    { className: "comment" },
    nameInput,
    commentInput,
    btnHolder
  );
  return commentInputContainer;
};

const firstComment = createComment("Shashwat", "Hello World!");
commentContainer.append(firstComment);

let isCommentOn = false;
commentContainer.addEventListener("click", function (event) {
  const target = event.target;

  if (target.tagName.toLowerCase() === "button") {
    if (target.classList.contains("reply") && !isCommentOn) {
      isCommentOn = true;
      target.closest(".main-comment").nextElementSibling.append(createCommentInput());

      return;
    }

    if (target.classList.contains("post")) {
      isCommentOn = false;
      const comment = target.closest('.comment');
      const name = comment.children[0].value;
      const text = comment.children[1].value

      if (!name || !text) return;
      target.closest(".sub-comments").appendChild(createComment(name, text));
      comment.remove();

      return;
    }

    if (target.classList.contains("cancel")) {
      target.closest('.comment').remove();
      isCommentOn = false;

      return;
    }
  }
});
