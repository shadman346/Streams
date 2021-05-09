import _ from 'lodash';
// import { deleteStream } from '../actions';
import {
   CREATE_STREAM,
   FETCH_STREAMS,
   FETCH_STREAM,
   DELETE_STREAM,
   EDIT_STREAM,
} from '../actions/types';

export default function streamReducer(state = {}, action) {
   switch (action.type) {
      case FETCH_STREAMS:
         return { ...state, ..._.mapKeys(action.payload, 'id') }; // array returning in as payload
      case FETCH_STREAM:
         return { ...state, [action.payload.id]: action.payload };
      case CREATE_STREAM:
         return { ...state, [action.payload.id]: action.payload };
      case EDIT_STREAM:
         return { ...state, [action.payload.id]: action.payload };
      case DELETE_STREAM:
         return _.omit(state, action.payload); // only id is coming  as inside payload

      default:
         return state;
   }
}
