import React, {Component} from 'react';
import axios from 'axios';
import '../../sass/devdeas/ideaSubmit.scss';

class IdeaSumit extends Component{

  constructor(props) {
    super(props);
    this.state = {
      dbResponse: "",
      ideaName: "",
      ideaLang: "",
      ideaDesc: "",
      ideaKeyWords: "",
    };

    this.handleChangeIdeaName = this.handleChangeIdeaName.bind(this);
    this.handleChangeIdeaLang = this.handleChangeIdeaLang.bind(this);
    this.handleChangeIdeaDesc = this.handleChangeIdeaDesc.bind(this);
    this.handleChangeIdeaKeyWords = this.handleChangeIdeaKeyWords.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeIdeaName(e) {
    this.setState({
        ideaName: e.target.value
    });
    console.log('onChange Name : ', this.state.ideaName);
  }

  handleChangeIdeaLang(e) {
    this.setState({
        ideaLang: e.target.value
    });
    console.log('onChange lang : ', this.state.ideaLang);
  }

  handleChangeIdeaDesc(e) {
    this.setState({
        ideaDesc: e.target.value
    });
    console.log('onChange desc : ', this.state.ideaDesc);
  }

  handleChangeIdeaKeyWords(e) {
    this.setState({
        ideaKeyWords: e.target.value
    });
    console.log('onChange keywords : ', this.state.ideaKeyWords);
  }

  handleSubmit(e){
    e.preventDefault();

    let idea = {
      name: this.state.ideaName,
      description: this.state.ideaDesc,
      lang: this.state.ideaLang,
      keywords: this.state.ideaKeyWords
    };
    console.log(idea);

    axios.post('http://185.163.126.247:9000/add', idea)
      .then(res => console.log("data sent"))
      .catch(err => console.log(err.data));

  }

  callDB() {
    fetch("http://185.163.126.247:9000/database")
    .then(res => res.text())
    .then(res => this.setState({ dbResponse: res }));
    console.log(this.state.dbResponse);
  }

  componentWillMount() {
      this.callDB();
  }

  render(){
    return(
      <div id="ideaSubmit" className="container pt-5">
        <h1 className="ml-5 devdeasTitle"><span>&#60;</span><span>&#47;</span>Submit<span>&#62;</span></h1>
        <p className="ml-5">Here you can upload any new idea. It'll be stored in my database and everyone will be able to see it so, be specific !</p>

        <div className="formCreateContainer bordered mt-3 mb-5">
          <h5>Submit idea form.</h5>

          <form onSubmit={this.handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputCreateIdeaName">Idea name</label>
                <input onChange={this.handleChangeIdeaName} type="text" className="form-control" id="inputCreateIdeaName" placeholder="Give a name to your idea" required/>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputCreateIdeaLang">Idea language <small>(If multiple : Separe by comma ' , ' without spaces)</small></label>
                <input onChange={this.handleChangeIdeaLang} type="text" className="form-control" id="inputCreateIdeaLang" placeholder="HTML,Javascript,C,C#,Ruby"/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inoutCreateIdeaDescription">Idea description</label>
              <textarea onChange={this.handleChangeIdeaDesc} className="form-control" type="text" id="inoutCreateIdeaDescription" cols="30" rows="5" placeholder="Describe your idea with the most details you can give"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="inputCreateIdeaKeywords">Idea keywords <small>(If multiple : Separe by comma ' , ' without spaces)</small></label>
              <input onChange={this.handleChangeIdeaKeyWords} type="text" className="form-control" id="inputCreateIdeaKeywords" placeholder="Hack,Web,Automation"/>
            </div>

            <div className="d-flex flex-column">
              <button type="submit" className="btn btn-success">Submit you idea !</button>
              <small>Database connexion : {this.state.dbResponse}</small>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default IdeaSumit;
