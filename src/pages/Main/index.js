import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ToolsActions } from "../../store/ducks/tools";
import { Creators as SearchActions } from "../../store/ducks/searchbar";
import { Creators as PopUpsActions } from "../../store/ducks/popups";

import { Wrapper } from "../../styles/components";
import { Container, Title, Subtitle, ActionBar } from "./styles";
import SearchBar from "../../components/SearchBar";
import Tool from "../../components/Tool";
import PrimaryButton from "../../components/PrimaryButton";
import PlusLightIcon from "../../assets/images/plus_light.png";
import AddPopUp from "../../components/AddPopUp";
import RemovePopUp from "../../components/RemovePopUp";
import ErrorBox from "../../components/ErrorBox";

class Main extends Component {
  componentDidMount() {
    this.props.getToolsRequest();
  }

  removeTool = id => {
    this.props.showRemovePopUpAction();
    this.props.deleteToolRequest(id);
  };

  addTool = tool => {
    this.props.showAddPopUpAction();
    this.props.addToolRequest(tool);
  };

  filterTool(tool, text, tagsOnly) {
    const searchTerm = text.toLowerCase();
    const title = tool.title.toLowerCase();
    const description = tool.description.toLowerCase();

    let tagList = "";
    tool.tags.map(tag => {
      tagList = tagList + " " + tag;
      return tagList;
    });
    tagList = tagList.toLowerCase();

    if (tagsOnly) return tagList.includes(searchTerm);
    else
      return title.includes(searchTerm) ||
        description.includes(searchTerm) ||
        tagList.includes(searchTerm)
        ? true
        : false;
  }

  render() {
    return (
      <>
        {this.props.popups.showAddPopUp && (
          <AddPopUp
            onClickCancel={this.props.showAddPopUpAction}
            onClickSubmit={this.addTool}
          />
        )}

        {this.props.popups.showRemovePopUp && (
          <RemovePopUp
            toolName={this.props.popups.showRemovePopUp}
            toolId={this.props.tools.idToRemove}
            onClickCancel={this.props.showRemovePopUpAction}
            onClickRemove={() =>
              this.removeTool(this.props.popups.idWaitingToRemove)
            }
          />
        )}

        <Wrapper id="wrapper">
          <Container id="header">
            <ErrorBox />
            <Title>VUTTR</Title>
            <Subtitle>Very Useful Tools to Remember</Subtitle>
            <ActionBar>
              <SearchBar />
              <PrimaryButton
                id="add-tool"
                extraLarge
                onClick={this.props.showAddPopUpAction}
              >
                <img src={PlusLightIcon} alt="plus-icon" />
                <span>Add</span>
              </PrimaryButton>
            </ActionBar>
          </Container>

          <Container id="tool-list">
            {this.props.tools.loading ? (
              <h1>...</h1>
            ) : (
              this.props.tools.data.map(tool =>
                !this.props.searchbar.textBar ? (
                  <Tool
                    key={tool.id}
                    id={tool.id}
                    name={tool.title}
                    link={tool.link}
                    description={tool.description}
                    tags={tool.tags.map(tag => tag)}
                    hideShowRemove={this.props.showRemovePopUpAction}
                  />
                ) : (
                  this.filterTool(
                    tool,
                    this.props.searchbar.textBar,
                    this.props.searchbar.tagsOnly
                  ) && (
                    <Tool
                      key={tool.id}
                      id={tool.id}
                      name={tool.title}
                      link={tool.link}
                      description={tool.description}
                      tags={tool.tags.map(tag => tag)}
                      hideShowRemove={this.props.showRemovePopUpAction}
                    />
                  )
                )
              )
            )}
          </Container>
        </Wrapper>
      </>
    );
  } //
}

const mapStateToProps = state => ({
  tools: state.tools,
  searchbar: state.searchbar,
  popups: state.popups
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { ...ToolsActions, ...SearchActions, ...PopUpsActions },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Main);
