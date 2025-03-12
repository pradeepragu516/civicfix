import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown, FaPlus, FaReply, FaTrash, FaFlag } from "react-icons/fa";
import "./CommunityDiscussion.css";

const CommunityDiscussion = () => {
  const [discussions, setDiscussions] = useState([]);
  const [newDiscussion, setNewDiscussion] = useState("");
  const [newComment, setNewComment] = useState({});
  const [sortBy, setSortBy] = useState("Newest");

  // Handle new discussion submission
  const handleAddDiscussion = () => {
    if (newDiscussion.trim() === "") return;
    const discussion = {
      id: Date.now(),
      text: newDiscussion,
      upvotes: 0,
      downvotes: 0,
      comments: [],
      createdAt: new Date(),
    };
    setDiscussions([discussion, ...discussions]);
    setNewDiscussion("");
  };

  // Handle upvote/downvote
  const handleVote = (id, type) => {
    setDiscussions((prevDiscussions) =>
      prevDiscussions.map((discussion) =>
        discussion.id === id
          ? {
              ...discussion,
              upvotes: type === "up" ? discussion.upvotes + 1 : discussion.upvotes,
              downvotes: type === "down" ? discussion.downvotes + 1 : discussion.downvotes,
            }
          : discussion
      )
    );
  };

  // Handle adding a comment
  const handleAddComment = (discussionId) => {
    if (!newComment[discussionId]?.trim()) return;
    setDiscussions((prevDiscussions) =>
      prevDiscussions.map((discussion) =>
        discussion.id === discussionId
          ? {
              ...discussion,
              comments: [
                ...discussion.comments,
                { id: Date.now(), text: newComment[discussionId], upvotes: 0 },
              ],
            }
          : discussion
      )
    );
    setNewComment({ ...newComment, [discussionId]: "" });
  };

  // Handle deleting a comment
  const handleDeleteComment = (discussionId, commentId) => {
    setDiscussions((prevDiscussions) =>
      prevDiscussions.map((discussion) =>
        discussion.id === discussionId
          ? {
              ...discussion,
              comments: discussion.comments.filter((comment) => comment.id !== commentId),
            }
          : discussion
      )
    );
  };

  // Sorting discussions
  const sortedDiscussions = [...discussions].sort((a, b) => {
    if (sortBy === "Newest") {
      return b.createdAt - a.createdAt;
    } else if (sortBy === "Most Upvoted") {
      return b.upvotes - a.upvotes;
    }
    return 0;
  });

  return (
    <div className="discussion-container">
      <h2>💬 Community Discussions</h2>

      {/* New Discussion Input */}
      <div className="new-discussion">
        <textarea
          placeholder="Start a discussion..."
          value={newDiscussion}
          onChange={(e) => setNewDiscussion(e.target.value)}
        />
        <button onClick={handleAddDiscussion}>
          <FaPlus /> Post
        </button>
      </div>

      {/* Sorting Options */}
      <div className="sort-options">
        <label>Sort by:</label>
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="Newest">Newest</option>
          <option value="Most Upvoted">Most Upvoted</option>
        </select>
      </div>

      {/* Discussion List */}
      <div className="discussion-list">
        {sortedDiscussions.map((discussion) => (
          <div key={discussion.id} className="discussion-card">
            <p>{discussion.text}</p>

            {/* Upvote/Downvote Buttons */}
            <div className="discussion-actions">
              <button onClick={() => handleVote(discussion.id, "up")}>
                <FaThumbsUp /> {discussion.upvotes}
              </button>
              <button onClick={() => handleVote(discussion.id, "down")}>
                <FaThumbsDown /> {discussion.downvotes}
              </button>
            </div>

            {/* Comments Section */}
            <div className="comments-section">
              <h4>Comments</h4>
              {discussion.comments.map((comment) => (
                <div key={comment.id} className="comment">
                  <p>{comment.text}</p>
                  <button onClick={() => handleDeleteComment(discussion.id, comment.id)}>
                    <FaTrash />
                  </button>
                </div>
              ))}

              {/* New Comment Input */}
              <div className="new-comment">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={newComment[discussion.id] || ""}
                  onChange={(e) => setNewComment({ ...newComment, [discussion.id]: e.target.value })}
                />
                <button onClick={() => handleAddComment(discussion.id)}>
                  <FaReply /> Reply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityDiscussion;
