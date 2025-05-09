import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaComments, FaTimes, FaPaperPlane, FaRobot } from "react-icons/fa";
import {
  getAIResponse,
  isGreeting,
  getGreetingResponse,
} from "../services/aiService";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    try {
      // Get AI response
      let response;
      if (isGreeting(inputMessage)) {
        response = getGreetingResponse();
      } else {
        response = await getAIResponse(inputMessage);
      }

      // Simulate typing delay
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: response,
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botResponse]);
        setIsTyping(false);
      }, 1000);
    } catch (error) {
      console.error("Error getting AI response:", error);
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestedQuestion = (question) => {
    setInputMessage(question);
    handleSendMessage();
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        className="chat-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <FaTimes /> : <FaComments />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-window"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Chat Header */}
            <div className="chat-header">
              <div className="chat-header-content">
                <FaRobot className="chat-bot-icon" />
                <div>
                  <h3>AI Assistant</h3>
                  <p className="chat-status">
                    {isTyping ? "Typing..." : "Online"}
                  </p>
                </div>
              </div>
              <button
                className="chat-close-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                <FaTimes />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="chat-messages">
              {messages.length === 0 ? (
                <div className="welcome-message">
                  <h4>Welcome to SoftSell!</h4>
                  <p>How can I help you today?</p>
                  <div className="suggested-questions">
                    <button
                      onClick={() =>
                        handleSuggestedQuestion("How do I sell my license?")
                      }
                    >
                      How do I sell my license?
                    </button>
                    <button
                      onClick={() =>
                        handleSuggestedQuestion("What licenses can I sell?")
                      }
                    >
                      What licenses can I sell?
                    </button>
                    <button
                      onClick={() =>
                        handleSuggestedQuestion("How long does it take?")
                      }
                    >
                      How long does it take?
                    </button>
                    <button
                      onClick={() => handleSuggestedQuestion("Is it safe?")}
                    >
                      Is it safe?
                    </button>
                  </div>
                </div>
              ) : (
                messages.map((message) => (
                  <motion.div
                    key={message.id}
                    className={`chat-message ${
                      message.sender === "user" ? "user-message" : "bot-message"
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {message.sender === "bot" && (
                      <FaRobot className="message-bot-icon" />
                    )}
                    <div className="message-content">
                      <p>{message.text}</p>
                      <span className="message-timestamp">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </motion.div>
                ))
              )}
              {isTyping && (
                <motion.div
                  className="chat-message bot-message"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <FaRobot className="message-bot-icon" />
                  <div className="message-content">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="chat-input-container">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                rows="1"
                className="chat-input"
              />
              <motion.button
                className="chat-send-btn"
                onClick={handleSendMessage}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                disabled={!inputMessage.trim()}
              >
                <FaPaperPlane />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
