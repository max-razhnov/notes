import { timeConvert, dateConvert } from "../../helpers";

const Card = props => {
  const date = new Date(props.date * 1000);
  return `<div id=${props.id} class="card">
          <header class="card-header">
            <p class="card-header-title">
              ${props.title.toUpperCase()}
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </a>
          </header>
          <div class="card-content">
            <div class="content">
              <span>${props.noteData}</span>. <br />
              <span style="font-weight: bold;">${props.userName.toUpperCase()}</span> <br />
              <span style="font-weight: bold;">${props.userEmail}</span>
              <br />
              <time>
              ${timeConvert(date)} - ${dateConvert(date)}
              </time>
            </div>
          </div>
          <footer id=${props.id} class="card-footer">
            <!--<a href="#" class="card-footer-item">Save</a>-->
            <a href="#" class="card-footer-item">Delete</a>
          </footer>
        </div>`;
};

export default Card;
