const FIREBASE_DOMAIN = 'https://ebookdata-667ae-default-rtdb.asia-southeast1.firebasedatabase.app';

export async function getAllBooks() {
  const response = await fetch(`${FIREBASE_DOMAIN}/books.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch books.');
  }

  const transformedQuotes = [];

  for (const key in data) {
    const bookObj = {
      id: key,
      ...data[key],
    };

    transformedQuotes.push(bookObj);
  }

  return transformedQuotes;
}

export async function getSingleBook(bookId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${bookId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quote.');
  }

  const loadedBook = {
    id: bookId,
    ...data,
  };

  return loadedBook;
}

export async function addBook(booksData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/books.json`, {
    mode: 'no-cors',
    method: 'POST',
    body: JSON.stringify(booksData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Could not create books.');
  }

  return null;
}

// export async function addComment(requestData) {
//   const response = await fetch(`${FIREBASE_DOMAIN}/comments/${requestData.quoteId}.json`, {
//     method: 'POST',
//     body: JSON.stringify(requestData.commentData),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || 'Could not add comment.');
//   }

//   return { commentId: data.name };
// }

// export async function getAllComments(quoteId) {
//   const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`);

//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || 'Could not get comments.');
//   }

//   const transformedComments = [];

//   for (const key in data) {
//     const commentObj = {
//       id: key,
//       ...data[key],
//     };

//     transformedComments.push(commentObj);
//   }

//   return transformedComments;
// }
