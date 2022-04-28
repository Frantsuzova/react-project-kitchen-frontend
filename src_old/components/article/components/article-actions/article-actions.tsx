import React, { FC, Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import agent from '../../../../agent';
import { connect } from 'react-redux';
import { DELETE_ARTICLE } from '../../../../constants/actionTypes';

// const mapDispatchToProps = (dispatch) => ({
//   onClickDelete: (payload) => dispatch({ type: DELETE_ARTICLE, payload }),
// });

interface IArticleActions {
  article: any;
  canModify: boolean;
  onClickDelete?: (
    payload: Promise<string>
  ) => Dispatch<SetStateAction<string>>;
}

const ArticleActions: FC<IArticleActions> = ({
  article,
  canModify,
  onClickDelete,
}) => {
  const del = () => {
    onClickDelete(agent.Articles.del(article.slug));
  };
  if (canModify) {
    return (
      <span>
        <Link
          to={`/editor/${article.slug}`}
          className="btn btn-outline-secondary btn-sm">
          <i className="ion-edit"></i> Edit Article
        </Link>

        <button className="btn btn-outline-danger btn-sm" onClick={del}>
          <i className="ion-trash-a"></i> Delete Article
        </button>
      </span>
    );
  }

  return <span></span>;
};

// export default connect(() => ({}), mapDispatchToProps)(ArticleActions);

export default ArticleActions;