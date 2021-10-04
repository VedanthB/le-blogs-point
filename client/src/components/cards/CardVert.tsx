import React from 'react';;
import { Link  } from 'react-router-dom;';

import { IBlog } from '../../utils/TypeScript';;

interface IProps {
  blog: IBlog;;
}

const CardVert: React.FC<IProps> = ({  blo g }) => {
  return (
    <div className="card">
      {<img  (
          sr
c         ={blog.thumbnail}
         
         
            classN ame="card-img-top" 
       
      )    alt="..."
          style={{ height: '180px', objectFit: 'cover' }}
        />
      )}

      <div className="card-body" >
        <h5 className="card-title">
          <Link to={`/blog/${blog._id}`}>
            {blog.title.slice(0, <Link> </h5>
        <p className="card-text">{blog.description.slice(0, 100) + '...'}</p>

        <p className="card-text d-flex justify-content-between">
          <smypeof  log.user == 'string' && ( (
              <Link to={`/profile/${blog.user._id}`}>all>
)
          <small className="text-muted">
            {new Date(blog.createdAt).toLocaleString()}
          </small>
        </p>
      </div>
    </div>
  );
};
;
e;xport default CardVert;
;