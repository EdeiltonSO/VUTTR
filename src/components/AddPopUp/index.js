import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Viewport,
  Wrapper,
  Header,
  Content,
  Fields,
  Actions,
  Input,
  Textarea
} from "./styles";
import PlusDarkIcon from "../../assets/images/plus_dark.png";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";

class AddPopUp extends Component {
  static propTypes = {
    onClickCancel: PropTypes.func.isRequired,
    onClickSubmit: PropTypes.func.isRequired
  };

  state = {
    tagsText: "",
    currentTool: {
      title: "",
      link: "",
      description: "",
      tags: []
    },
    missingSomeField: false
  };

  checkAndSend = () => {
    const { tagsText } = this.state;
    const { title, link, description } = this.state.currentTool;

    if (tagsText && title && description) {
      const arrayTags = tagsText.split(" ");

      this.setState(
        {
          currentTool: {
            ...this.state.currentTool,
            tags: arrayTags,
            link:
              link.substring(0, 4) === "http"
                ? link
                : link !== "" && `http://${link}`
          }
        },
        () => {
          this.props.onClickSubmit(this.state.currentTool);
        }
      );
    } else {
      this.setState({ missingSomeField: true });
    }
  };

  render() {
    return (
      <Viewport id="viewport">
        <Wrapper id="wrapper">
          <Header>
            <img src={PlusDarkIcon} alt="Plus Icon" />
            <h2>Add new tool</h2>
          </Header>

          <Content>
            <Fields>
              <h3>Tool title</h3>
              <Input
                id="title"
                isEmpty={
                  this.state.missingSomeField && !this.state.currentTool.title
                    ? true
                    : false
                }
                placeholder="Insert tool title here..."
                value={this.state.currentTool.title}
                onChange={e =>
                  this.setState({
                    currentTool: {
                      ...this.state.currentTool,
                      title: e.target.value
                    },
                    missingSomeField: false
                  })
                }
              />

              <h3>Tool link</h3>
              <Input
                id="link"
                placeholder="Now, insert the tool link..."
                value={this.state.currentTool.link}
                onChange={e =>
                  this.setState({
                    currentTool: {
                      ...this.state.currentTool,
                      link: e.target.value
                    },
                    missingSomeField: false
                  })
                }
              />

              <h3>Tool description</h3>
              <Textarea
                id="description"
                isEmpty={
                  this.state.missingSomeField &&
                  !this.state.currentTool.description
                    ? true
                    : false
                }
                placeholder="And here, the tool description..."
                value={this.state.currentTool.description}
                onChange={e =>
                  this.setState({
                    currentTool: {
                      ...this.state.currentTool,
                      description: e.target.value
                    },
                    missingSomeField: false
                  })
                }
              />

              <h3>Tags</h3>
              <Input
                id="tags"
                isEmpty={
                  this.state.missingSomeField && !this.state.tagsText
                    ? true
                    : false
                }
                placeholder="Finally, insert some tags..."
                value={this.state.tagsText}
                onChange={e =>
                  this.setState({
                    tagsText: e.target.value,
                    missingSomeField: false
                  })
                }
              />
            </Fields>

            <Actions>
              <SecondaryButton
                onClick={this.props.onClickCancel}
                styleBtn="success"
              >
                <span>Cancel</span>
              </SecondaryButton>
              <PrimaryButton
                id="ok-button"
                onClick={this.checkAndSend}
                styleBtn="success"
              >
                <span>Add tool</span>
              </PrimaryButton>
            </Actions>
          </Content>
        </Wrapper>
      </Viewport>
    );
  }
}

export default AddPopUp;
