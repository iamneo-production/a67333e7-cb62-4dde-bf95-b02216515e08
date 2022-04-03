import axios from 'axios';

const CHAT_API_BASE_URL = "http://localhost:8090/chat";

class ChatService{

    getChats(chatId){
        return axios.get(CHAT_API_BASE_URL+'/' + chatId);
    }

    sendMsg(id, body){
        return axios.post(CHAT_API_BASE_URL+'/'+id, body);
    }

    deleteChat(chatId){
        return axios.delete(CHAT_API_BASE_URL+'/'+chatId);
    }
}

export default new ChatService();