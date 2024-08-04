## Public Routes

### POST /auth/register

- Body: `{ "username": "string", "email": "string", "password": "string" }`

### POST /auth/login

- Body: `{ "email": "string", "password": "string" }`

### GET /posts/all

- Query: `?page=number&limit=number`

### GET /post

- Query: `?id=string`

### GET /search/posts

- Query: `?text=string&tags=string,string&characters=string,string&genres=string,string&categories=string,string&page=number&limit=number`

### GET /search/tags

- Query: `?tags=string,string&page=number&limit=number`

### GET /search/characters

- Query: `?characters=string,string&page=number&limit=number`

### GET /search/genres

- Query: `?genres=string,string&page=number&limit=number`

### GET /search/categories

- Query: `?categories=string,string&page=number&limit=number`

### GET /tags/all

### GET /categories/all

### GET /genres/all

## Private Routes

### GET /user/info

- Headers: `{ "Authorization": "Bearer token" }`

### GET /user/liked

- Headers: `{ "Authorization": "Bearer token" }`

### POST /posts/create

- Headers: `{ "Authorization": "Bearer token" }`
- Body: `{ "title": "string", "content": "string", "tags": ["string"], "characters": ["string"], "genres": ["string"], "categories": ["string"] }`

### PUT /posts/update

- Headers: `{ "Authorization": "Bearer token" }`
- Body: `{ "id": "string", "title": "string", "content": "string", "tags": ["string"], "characters": ["string"], "genres": ["string"], "categories": ["string"] }`

### DELETE /posts/delete

- Headers: `{ "Authorization": "Bearer token" }`
- Body: `{ "id": "string" }`

### POST /posts/like

- Headers: `{ "Authorization": "Bearer token" }`
- Body: `{ "id": "string" }`

### POST /posts/unlike

- Headers: `{ "Authorization": "Bearer token" }`
- Body: `{ "id": "string" }`

### POST /posts/comment/add

- Headers: `{ "Authorization": "Bearer token" }`
- Body: `{ "postId": "string", "content": "string" }`

### DELETE /posts/comment/delete

- Headers: `{ "Authorization": "Bearer token" }`
- Body: `{ "commentId": "string" }`

### GET /user/posts

- Headers: `{ "Authorization": "Bearer token" }`
- Query: `?page=number&limit=number`

### GET /user/comments

- Headers: `{ "Authorization": "Bearer token" }`
- Query: `?page=number&limit=number`

### PUT /user/update

- Headers: `{ "Authorization": "Bearer token" }`
- Body: `{ "username": "string", "email": "string", "bio": "string", "profilePicture": "string" }`

### POST /user/follow

- Headers: `{ "Authorization": "Bearer token" }`
- Body: `{ "followUserId": "string" }`

### POST /user/unfollow

- Headers: `{ "Authorization": "Bearer token" }`
- Body: `{ "unfollowUserId": "string" }`

### GET /user/followers

- Headers: `{ "Authorization": "Bearer token" }`

### GET /user/following

- Headers: `{ "Authorization": "Bearer token" }`
