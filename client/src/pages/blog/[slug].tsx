import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { IParams, IBlog, RootStore } from '../../utils/Typescript';
import { getAPI } from '../../utils/FetchData';

import Loading from '../../components/global/Loading';
import { showErrMsg } from '../../components/alert/Alert';
import DisplayBlog from '../../components/blog/DisplayBlog';
import { useSelector } from 'react-redux';

const DetailBlog = () => {
  const id = useParams<IParams>().slug;

  const { socket } = useSelector((state: RootStore) => state);

  const [blog, setBlog] = useState<IBlog>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) return;

    setLoading(true);

    getAPI(`blog/${id}`)
      .then((res) => {
        setBlog(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response.data.msg);
        setLoading(false);
      });

    return () => setBlog(undefined);
  }, [id]);

  // Join Room
  useEffect(() => {
    if (!id || !socket) return;
    socket.emit('joinRoom', id);

    return () => {
      socket.emit('outRoom', id);
    };
  }, [socket, id]);

  if (loading) return <Loading />;
  return (
    <div className="my-4">
      {error && showErrMsg(error)}

      {blog && <DisplayBlog blog={blog} />}
    </div>
  );
};

export default DetailBlog;
