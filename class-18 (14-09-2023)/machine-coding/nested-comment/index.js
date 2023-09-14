const commentContainer = document.getElementById("commentContainer");

const createElement = (elementType = "div", properties, ...children) => {
  const element = document.createElement(elementType);
  for (let key in properties) {
    element[key] = properties[key];
  }

  children.forEach(child => element.append(child));

  return element;
};

const createComment = (name, text) => {
  const p1 = createElement("p", { innerText: name, className: "text-bold name" });
  const p2 = createElement("p", { innerText: text, className: "content-text"  });
  const replyBtn = createElement("button", { textContent: "Reply", className: "reply" });

  const mainComment = createElement("div", { className: "main-comment" }, p1, p2, replyBtn);
  const subComments = createElement("div", { className: "sub-comments"});

  const comment = createElement("div", { className: "comment" }, mainComment, subComments);
  return comment;
};

const firstComment = createComment('Shashwat', 'Hello World!');
commentContainer.append(firstComment);




// const containerComment = document.createElement("div");
// const commenterName = document.createElement("p");
// const comment = document.createElement("p");
// commenterName.innerText = "Shashwat";
// comment.innerText = "Hello World!";
// containerComment.append(commenterName);
// containerComment.append(comment);

// commentContainer.append(containerComment);


