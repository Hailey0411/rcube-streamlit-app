# Created on : 1 Aug 2024, 11:39:05 pm
# Author     : myatt
# pip install streamlit langchain lanchain-openai beautifulsoup4 python-dotenv chromadb

import streamlit as st


# app config
st.set_page_config(page_title="Chat with websites", page_icon="🤖")
st.title("Chat with websites")

# sidebar
with st.sidebar:
    st.header("Settings")
    website_url = st.text_input("Website URL")

