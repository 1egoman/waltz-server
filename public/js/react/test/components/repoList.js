"use strict";
import assert from "assert";
import helpers from "../helpers";
import React from 'react';
import Select from 'react-select';
import sinon from 'sinon';
import {Button, Popover, OverlayTrigger, MenuItem} from 'react-bootstrap';
import {
  RepoListComponent,
  importRepoButton,
  mapStateToProps,
} from '../../components/repoList';
import Repo from '../../components/repo';
import Loading from '../../components/loading';

describe('components/repoList.js', function() {
  describe('import repo button', function() {
    it('should render the repo import button', function() {
      assert.deepEqual(importRepoButton({
        importNewRepo: "importRepo",
      }), <button
        className="btn btn-sm btn-primary pull-right"
        onClick={"importRepo"}
      >Import a new repository</button>);
    });
  });
  // describe('bare component', function() {
  //   it('should render a repolist with one repo, no import', function() {
  //     let importNewRepoSpy = sinon.spy(), deleteRepoSpy = sinon.spy();
  //     assert.deepEqual(RepoListComponent({
  //       repos: [helpers.testRepo],
  //       active_repo: ["username", "reponame"],
  //       is_importing_repo: false,
  //       importNewRepo: importNewRepoSpy,
  //       deleteRepo: deleteRepoSpy,
  //     }), <ul className={`repos repos-list`}>
  //       <div className="repos-controls">
  //         <h4 className="repos-label">Repositories</h4>
  //         <button
  //           className="btn btn-sm btn-primary pull-right"
  //           onClick={undefined}
  //         >Import a new repository</button>
  //       </div>
  //       {[<MenuItem eventKey={0} key={0}><Repo repo={helpers.testRepo} key={0} index={0} selected={true}>
  //         <OverlayTrigger
  //           trigger="click"
  //           rootClose
  //           placement="top"
  //           overlay={<Popover title="Really Delete?" id="delete-repo">
  //             <Button bsStyle="primary" onClick={undefined}>Yes, do it</Button>
  //           </Popover>}
  //         >
  //           <i className="fa fa-trash pull-right repo-delete" />
  //         </OverlayTrigger>
  //       </Repo></MenuItem>]}
  //     </ul>);
  //
  //     assert(deleteRepoSpy.calledOnce);
  //     assert(deleteRepoSpy.calledWith(helpers.testRepo));
  //     assert(importNewRepoSpy.calledOnce);
  //     assert(importNewRepoSpy.calledWith(true));
  //   });
  //   it('should render a repolist with one repo, with import', function() {
  //     let importNewRepoSpy = sinon.spy(), deleteRepoSpy = sinon.spy();
  //     assert.deepEqual(RepoListComponent({
  //       repos: [helpers.testRepo],
  //       active_repo: ["username", "reponame"],
  //       is_importing_repo: true,
  //       importNewRepo: importNewRepoSpy,
  //       deleteRepo: deleteRepoSpy,
  //     }), <ul className={`repos repos-list repos-disabled`}>
  //       <div className="repos-controls">
  //         <h4 className="repos-label">Repositories</h4>
  //         {null}
  //       </div>
  //       {[<Repo repo={helpers.testRepo} key={0} index={0} selected={true}>
  //         <OverlayTrigger
  //           trigger="click"
  //           rootClose
  //           placement="top"
  //           overlay={<Popover title="Really Delete?" id="delete-repo">
  //             <Button bsStyle="primary" onClick={undefined}>Yes, do it</Button>
  //           </Popover>}
  //         >
  //           <i className="fa fa-trash pull-right repo-delete" />
  //         </OverlayTrigger>
  //       </Repo>]}
  //     </ul>);
  //
  //     assert(deleteRepoSpy.calledOnce);
  //     assert(deleteRepoSpy.calledWith(helpers.testRepo));
  //     assert.equal(importNewRepoSpy.callCount, 0);
  //   });
  //   it('should render a repolist with no repos', function() {
  //     let importNewRepoSpy = sinon.spy(), deleteRepoSpy = sinon.spy();
  //     assert.deepEqual(RepoListComponent({
  //       repos: [],
  //       active_repo: ["username", "reponame"],
  //       is_importing_repo: true,
  //       importNewRepo: importNewRepoSpy,
  //       deleteRepo: deleteRepoSpy,
  //     }), <ul className={`repos repos-list repos-disabled`}>
  //       <div className="repos-controls">
  //         <h4 className="repos-label">Repositories</h4>
  //         {null}
  //       </div>
  //       <Loading
  //         title="No Repositories"
  //         message={<span>Why not <span className="click" onClick={undefined}>import a new one?</span></span>}
  //       />
  //     </ul>);
  //
  //     assert(importNewRepoSpy.calledOnce);
  //     assert(importNewRepoSpy.calledWith(true));
  //     assert.equal(deleteRepoSpy.callCount, 0);
  //   });
  //   it('should render a repolist with three repos', function() {
  //     let importNewRepoSpy = sinon.spy(), deleteRepoSpy = sinon.spy();
  //     assert.deepEqual(RepoListComponent({
  //       repos: helpers.initialState.repos,
  //       active_repo: ["username", "reponame"],
  //       is_importing_repo: true,
  //       importNewRepo: importNewRepoSpy,
  //       deleteRepo: deleteRepoSpy,
  //     }), <ul className={`repos repos-list repos-disabled`}>
  //       <div className="repos-controls">
  //         <h4 className="repos-label">Repositories</h4>
  //         {null}
  //       </div>
  //       {[<Repo repo={helpers.initialState.repos[0]} key={0} index={0} selected={true}>
  //         <OverlayTrigger
  //           trigger="click"
  //           rootClose
  //           placement="top"
  //           overlay={<Popover title="Really Delete?" id="delete-repo">
  //             <Button bsStyle="primary" onClick={undefined}>Yes, do it</Button>
  //           </Popover>}
  //         >
  //           <i className="fa fa-trash pull-right repo-delete" />
  //         </OverlayTrigger>
  //       </Repo>, <Repo repo={helpers.initialState.repos[1]} key={1} index={1} selected={false}>
  //         <OverlayTrigger
  //           trigger="click"
  //           rootClose
  //           placement="top"
  //           overlay={<Popover title="Really Delete?" id="delete-repo">
  //             <Button bsStyle="primary" onClick={undefined}>Yes, do it</Button>
  //           </Popover>}
  //         >
  //           <i className="fa fa-trash pull-right repo-delete" />
  //         </OverlayTrigger>
  //       </Repo>, <Repo repo={helpers.initialState.repos[2]} key={2} index={2} selected={false}>
  //         <OverlayTrigger
  //           trigger="click"
  //           rootClose
  //           placement="top"
  //           overlay={<Popover title="Really Delete?" id="delete-repo">
  //             <Button bsStyle="primary" onClick={undefined}>Yes, do it</Button>
  //           </Popover>}
  //         >
  //           <i className="fa fa-trash pull-right repo-delete" />
  //         </OverlayTrigger>
  //       </Repo>]}
  //     </ul>);
  //
  //     assert.equal(deleteRepoSpy.callCount, 3);
  //     assert(deleteRepoSpy.getCall(0).args, helpers.initialState.repos[0]);
  //     assert(deleteRepoSpy.getCall(1).args, helpers.initialState.repos[1]);
  //     assert(deleteRepoSpy.getCall(2).args, helpers.initialState.repos[2]);
  //     assert.equal(importNewRepoSpy.callCount, 0);
  //   });
  // });
  describe('mapStateToProps', function() {
    it('should correctly resolve props', function() {
      let state = Object.assign({}, helpers.initialState, {
        active_repo: ["username", "reponame"],
        repos: [],
        repo_import_dialog_open: false,
      });
      assert.deepEqual(mapStateToProps(state, {}), {
        repos: [],
        active_repo: ["username", "reponame"],
        is_importing_repo: false,
      });
    });
  });
});
