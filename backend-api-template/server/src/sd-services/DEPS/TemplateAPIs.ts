let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { Middleware } from '../../middleware/Middleware'; //_splitter_
import * as settings from '../../config/config'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import { MongoPersistance } from '../../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
import { pubsubUtil } from '../../utils/ndefault-pub-sub/listen/listen'; //_splitter_
import * as os from 'os'; //_splitter_
import { sep } from 'path'; //_splitter_
//append_imports_end
export class TemplateAPIs {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'TemplateAPIs';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new TemplateAPIs(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      pubsubUtil
        .getInstance()
        .on('loaderEvent', async (data, spanInst) =>
          this.loaderEvent(spanInst, data)
        );

      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_TemplateAPIs_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: TemplateAPIs');

    //appendnew_flow_TemplateAPIs_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: TemplateAPIs');

    this.app['get'](
      `${this.serviceBasePath}/getalltypes/:name/:limit/:skip`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.queryandOptSetter(bh, parentSpanInst);
          //appendnew_next_sd_6rJXsS69jyZrljc6
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_6rJXsS69jyZrljc6');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/getprocedure/:name`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.queryToFetchProcedure(bh, parentSpanInst);
          //appendnew_next_sd_M4hSSGivdLOM71pK
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_M4hSSGivdLOM71pK');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/addUrltoDb`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.optionsandFilterSetter(bh, parentSpanInst);
          //appendnew_next_sd_QOjikUx35EVMlwvw
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_QOjikUx35EVMlwvw');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/uploadfile`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        path: 'temporary'.replace(/\\|\//g, sep),
        options: [{ name: 'file', maxCount: 1 }],
      }),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.variableSetter(bh, parentSpanInst);
          //appendnew_next_sd_Mz9PWT119XIs2F1S
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Mz9PWT119XIs2F1S');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/upload-image-admin`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        path: 'temporary'.replace(/\\|\//g, sep),
        options: [{ name: 'file', maxCount: 1 }],
      }),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.varSetter(bh, parentSpanInst);
          //appendnew_next_sd_Gqhd8dvFQj9EOoEe
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Gqhd8dvFQj9EOoEe');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/addadminrecipe`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.optionsandFilterSet(bh, parentSpanInst);
          //appendnew_next_sd_csfTj6hdciAGy5m4
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_csfTj6hdciAGy5m4');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/addadminprocess`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.varSet(bh, parentSpanInst);
          //appendnew_next_sd_d7XiCCJ6QGHMR92t
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_d7XiCCJ6QGHMR92t');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/pathhistory`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_LzBDpxWect02ABfC(bh, parentSpanInst);
          //appendnew_next_sd_48p02fFo44bEYndl
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_48p02fFo44bEYndl');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/getpathhistory`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.queriesToFetchAll(bh, parentSpanInst);
          //appendnew_next_sd_XpbjtCQgHJIF3108
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_XpbjtCQgHJIF3108');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/analytics/:name`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_Q0EEg9xSSqHTc9ZJ(bh, parentSpanInst);
          //appendnew_next_sd_JJj9G3PyD8gatzzU
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_JJj9G3PyD8gatzzU');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/analyticsforcategorytime/:name/:time`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_jJXwITQgKCQnXFjj(bh, parentSpanInst);
          //appendnew_next_sd_MmM4U0h0Kk8fw04x
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_MmM4U0h0Kk8fw04x');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/countall`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_9J2vpiizIQnoIIBU(bh, parentSpanInst);
          //appendnew_next_sd_IEo5it8bpstIxzIN
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_IEo5it8bpstIxzIN');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/searchrecipes/:name`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_FrQU3kwVl0hsNxpA(bh, parentSpanInst);
          //appendnew_next_sd_yLI9Pu9QcNmadjBT
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_yLI9Pu9QcNmadjBT');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/addtimespent/:name/:timespent`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_EA38FPKZKFBvi61p(bh, parentSpanInst);
          //appendnew_next_sd_MlpPyp6BQY3Rmkmq
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_MlpPyp6BQY3Rmkmq');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/analyticsforrecipe/:name`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_CRVhHmgA1HRXFRgs(bh, parentSpanInst);
          //appendnew_next_sd_R4lejppNnBJZyBoD
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_R4lejppNnBJZyBoD');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/master-api/:specific`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_6XhPAVJoIAKqkdgk(bh, parentSpanInst);
          //appendnew_next_sd_iOnCLjeN5YHplCFH
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_iOnCLjeN5YHplCFH');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/signup`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'Register',
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          await this.registerOut(bh, parentSpanInst);
          //appendnew_next_sd_i5hV3qPITieNMp2p
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_i5hV3qPITieNMp2p');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'Register',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/response-api`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'Authenticate',
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_QpgwEGHleG2kxVWY(bh, parentSpanInst);
          //appendnew_next_sd_Ms7Nhl6vcovxY3cX
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Ms7Nhl6vcovxY3cX');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'Authenticate',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/login`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'Login',
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          await this.logOut(bh, parentSpanInst);
          //appendnew_next_sd_jFxXdEZgh1T0iPem
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_jFxXdEZgh1T0iPem');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'Login',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/logout`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'Logout',
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          await this.logout(bh, parentSpanInst);
          //appendnew_next_sd_kDOaI522n4EKooay
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_kDOaI522n4EKooay');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'Logout',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/addadmincategory`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.optionsandFilter(bh, parentSpanInst);
          //appendnew_next_sd_bs6S8mgNi1bHldzt
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_bs6S8mgNi1bHldzt');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/getnotifierdata`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.queryandOptionsSett(bh, parentSpanInst);
          //appendnew_next_sd_u6O4Z241a5aiShTz
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_u6O4Z241a5aiShTz');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/notifier`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_dV4QbIv5D1j0VluF(bh, parentSpanInst);
          //appendnew_next_sd_RujpdPpM9xbHxdFT
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_RujpdPpM9xbHxdFT');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_TemplateAPIs_HttpIn
  }
  //   service flows_TemplateAPIs

  async loaderEvent(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'loaderEvent',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_nIZStPw1dv8CCj7a(bh, parentSpanInst);
      //appendnew_next_loaderEvent
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_scdFXzyu1uUkOgVK',
        spanInst,
        'loaderEvent'
      );
    }
  }

  //appendnew_flow_TemplateAPIs_start

  async queryandOptSetter(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'queryandOptSetter',
      parentSpanInst
    );
    try {
      let str = bh.input.params.name;
      bh.input.mongoQuery = {
        type: { $regex: `${bh.input.params.name}`, $options: 'i' },
      };
      bh.input.options = {
        skip: parseInt(bh.input.params.skip),
        limit: parseInt(bh.input.params.limit),
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getRecipes(bh, parentSpanInst);
      //appendnew_next_queryandOptSetter
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YZ2EcDkKksRl1ny9',
        spanInst,
        'queryandOptSetter'
      );
    }
  }

  async getRecipes(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getRecipes',
      parentSpanInst
    );
    try {
      bh.input.result = await MongoPersistance.getInstance().find(
        'sd_4YvRRtlD4kQUpHLC',
        'alltypes',
        bh.input.mongoQuery,
        bh.input.options
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ptbUwar6Tf9DqRD9(bh, parentSpanInst);
      //appendnew_next_getRecipes
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KKUtTvMSRvqhaX3d',
        spanInst,
        'getRecipes'
      );
    }
  }

  async sd_ptbUwar6Tf9DqRD9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ptbUwar6Tf9DqRD9',
      parentSpanInst
    );
    try {
      let pubsubInstance = pubsubUtil.getInstance();
      pubsubInstance.emit('loaderEvent', bh, spanInst);
      this.tracerService.sendData(spanInst, bh);
      await this.sd_CgpsaKJbTUDbRjvv(bh, parentSpanInst);
      //appendnew_next_sd_ptbUwar6Tf9DqRD9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ptbUwar6Tf9DqRD9',
        spanInst,
        'sd_ptbUwar6Tf9DqRD9'
      );
    }
  }

  async sd_CgpsaKJbTUDbRjvv(bh, parentSpanInst) {
    try {
      bh.web.res.status(202).send(bh.input);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CgpsaKJbTUDbRjvv');
    }
  }

  async queryToFetchProcedure(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'queryToFetchProcedure',
      parentSpanInst
    );
    try {
      bh.local.mongoQuery = {
        name: { $regex: `${bh.input.params.name}`, $options: 'i' },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getProcedures(bh, parentSpanInst);
      //appendnew_next_queryToFetchProcedure
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BxiT08vW5CLfSFn3',
        spanInst,
        'queryToFetchProcedure'
      );
    }
  }

  async getProcedures(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getProcedures',
      parentSpanInst
    );
    try {
      bh.input.result = await MongoPersistance.getInstance().find(
        'sd_5oURo7dOvYTQ7fSX',
        'new-procedures',
        bh.local.mongoQuery,
        bh.input.params
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_mMzDYqCj2xo3O8K8(bh, parentSpanInst);
      //appendnew_next_getProcedures
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xNecy8LtaqY0AEP3',
        spanInst,
        'getProcedures'
      );
    }
  }

  async sd_mMzDYqCj2xo3O8K8(bh, parentSpanInst) {
    try {
      bh.web.res.status(202).send(bh.input.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mMzDYqCj2xo3O8K8');
    }
  }

  async optionsandFilterSetter(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'optionsandFilterSetter',
      parentSpanInst
    );
    try {
      bh.local.options = { upsert: true };
      bh.local.filter = { name: `${bh.input.body.recipeName}` };

      bh.local.updateDoc = {
        $push: {
          userImgs: {
            step: bh.input.body.stepNo,
            img: `${bh.input.body.url}`,
          },
        },
      };

      console.log(bh.input.body.recipeName);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.addURLsToProcedures(bh, parentSpanInst);
      //appendnew_next_optionsandFilterSetter
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1iHUPG253JMWJGnO',
        spanInst,
        'optionsandFilterSetter'
      );
    }
  }

  async addURLsToProcedures(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'addURLsToProcedures',
      parentSpanInst
    );
    try {
      bh.local.res = await MongoPersistance.getInstance().updateOne(
        'sd_5oURo7dOvYTQ7fSX',
        'new-procedures',
        bh.local.filter,
        bh.local.updateDoc,
        bh.local.options
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_U9IBw25oMQBCwfcl(bh, parentSpanInst);
      //appendnew_next_addURLsToProcedures
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5CzQrJewPlgVVPlz',
        spanInst,
        'addURLsToProcedures'
      );
    }
  }

  async sd_U9IBw25oMQBCwfcl(bh, parentSpanInst) {
    try {
      bh.web.res.status(202).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_U9IBw25oMQBCwfcl');
    }
  }

  async variableSetter(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'variableSetter',
      parentSpanInst
    );
    try {
      bh.data = bh.input.files.file[0].path;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_variableSetter
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Nh5pzvEz2YMppMFT',
        spanInst,
        'variableSetter'
      );
    }
  }

  async varSetter(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('varSetter', parentSpanInst);
    try {
      bh.data = bh.input.files.file[0].path;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_varSetter
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wTDEhNQVrzQSbklW',
        spanInst,
        'varSetter'
      );
    }
  }

  async optionsandFilterSet(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'optionsandFilterSet',
      parentSpanInst
    );
    try {
      bh.local.options = {};
      bh.local.filter = {};

      this.tracerService.sendData(spanInst, bh);
      bh = await this.addRecipes(bh, parentSpanInst);
      //appendnew_next_optionsandFilterSet
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PbpKPLj0NnFdgkFk',
        spanInst,
        'optionsandFilterSet'
      );
    }
  }

  async addRecipes(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'addRecipes',
      parentSpanInst
    );
    try {
      bh.local.res = await MongoPersistance.getInstance().insertOne(
        'sd_5oURo7dOvYTQ7fSX',
        'new-alltypes',
        bh.input.body,
        bh.local.options
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_5xtix2RpqRlk82nf(bh, parentSpanInst);
      //appendnew_next_addRecipes
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5VSMTE2HM1nuj7e9',
        spanInst,
        'addRecipes'
      );
    }
  }

  async sd_5xtix2RpqRlk82nf(bh, parentSpanInst) {
    try {
      bh.web.res.status(202).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5xtix2RpqRlk82nf');
    }
  }

  async varSet(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('varSet', parentSpanInst);
    try {
      bh.local.options = {};
      bh.local.filter = {};
      bh.input.data = bh.input.body;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.addProcedure(bh, parentSpanInst);
      //appendnew_next_varSet
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_z4ay6NRCVXzGSzpa',
        spanInst,
        'varSet'
      );
    }
  }

  async addProcedure(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'addProcedure',
      parentSpanInst
    );
    try {
      bh.local.res = await MongoPersistance.getInstance().insertOne(
        'sd_5oURo7dOvYTQ7fSX',
        'new-procedures',
        bh.input.data,
        bh.local.options
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_n4rPjvM9cqqlcNMe(bh, parentSpanInst);
      //appendnew_next_addProcedure
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mvhMDzw5XcIOtw5O',
        spanInst,
        'addProcedure'
      );
    }
  }

  async sd_n4rPjvM9cqqlcNMe(bh, parentSpanInst) {
    try {
      bh.web.res.status(202).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_n4rPjvM9cqqlcNMe');
    }
  }

  async sd_LzBDpxWect02ABfC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LzBDpxWect02ABfC',
      parentSpanInst
    );
    try {
      bh.local.filter = {
        ip: `${bh.input.body.ip}`,
      };

      bh.input.updateDoc = {
        $set: {
          path: `${bh.input.body.path}`,
        },
      };

      bh.local.options = {
        upsert: true,
      };

      // console.log(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_sy6MrJco0dW3dAgJ(bh, parentSpanInst);
      //appendnew_next_sd_LzBDpxWect02ABfC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LzBDpxWect02ABfC',
        spanInst,
        'sd_LzBDpxWect02ABfC'
      );
    }
  }

  async sd_sy6MrJco0dW3dAgJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sy6MrJco0dW3dAgJ',
      parentSpanInst
    );
    try {
      bh.local.resp = await MongoPersistance.getInstance().updateOne(
        'sd_5oURo7dOvYTQ7fSX',
        'pathHistory',
        bh.local.filter,
        bh.input.updateDoc,
        bh.local.options
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_FZ0P1j15Zfmj32ks(bh, parentSpanInst);
      //appendnew_next_sd_sy6MrJco0dW3dAgJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sy6MrJco0dW3dAgJ',
        spanInst,
        'sd_sy6MrJco0dW3dAgJ'
      );
    }
  }

  async sd_FZ0P1j15Zfmj32ks(bh, parentSpanInst) {
    try {
      bh.web.res.status(202).send(bh.local.resp);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FZ0P1j15Zfmj32ks');
    }
  }

  async queriesToFetchAll(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'queriesToFetchAll',
      parentSpanInst
    );
    try {
      bh.input.mongoQuery = {};
      bh.input.options = {};

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getPaths(bh, parentSpanInst);
      //appendnew_next_queriesToFetchAll
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zZXyrX6JVqGAdj9R',
        spanInst,
        'queriesToFetchAll'
      );
    }
  }

  async getPaths(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('getPaths', parentSpanInst);
    try {
      bh.input.result = await MongoPersistance.getInstance().find(
        'sd_5oURo7dOvYTQ7fSX',
        'pathHistory',
        bh.input.mongoQuery,
        bh.input.options
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_lzgtElFnlHrhy4qH(bh, parentSpanInst);
      //appendnew_next_getPaths
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_d7fxIK6hjpmWuDWJ',
        spanInst,
        'getPaths'
      );
    }
  }

  async sd_lzgtElFnlHrhy4qH(bh, parentSpanInst) {
    try {
      bh.web.res.status(202).send(bh.input.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lzgtElFnlHrhy4qH');
    }
  }

  async sd_Q0EEg9xSSqHTc9ZJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Q0EEg9xSSqHTc9ZJ',
      parentSpanInst
    );
    try {
      bh.local.filter = {
        link: { $regex: `${bh.input.params.name}`, $options: 'i' },
      };
      bh.local.document = { $inc: { score: 1 } };
      console.log(bh.input.params.name);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.addCount(bh, parentSpanInst);
      //appendnew_next_sd_Q0EEg9xSSqHTc9ZJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Q0EEg9xSSqHTc9ZJ',
        spanInst,
        'sd_Q0EEg9xSSqHTc9ZJ'
      );
    }
  }

  async addCount(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('addCount', parentSpanInst);
    try {
      bh.input.result = await MongoPersistance.getInstance().updateOne(
        'sd_4YvRRtlD4kQUpHLC',
        'categories',
        bh.local.filter,
        bh.local.document,
        bh.input.options
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_BAs6ZEycjsa0jfi4(bh, parentSpanInst);
      //appendnew_next_addCount
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eiz2VxxKrPZxo1il',
        spanInst,
        'addCount'
      );
    }
  }

  async sd_BAs6ZEycjsa0jfi4(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.input.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BAs6ZEycjsa0jfi4');
    }
  }

  async sd_jJXwITQgKCQnXFjj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jJXwITQgKCQnXFjj',
      parentSpanInst
    );
    try {
      let time = parseInt(bh.input.params.time);

      bh.local.filter = {
        link: { $regex: `${bh.input.params.name}`, $options: 'i' },
      };
      bh.local.document = { $inc: { time: time } };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.addTime(bh, parentSpanInst);
      //appendnew_next_sd_jJXwITQgKCQnXFjj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jJXwITQgKCQnXFjj',
        spanInst,
        'sd_jJXwITQgKCQnXFjj'
      );
    }
  }

  async addTime(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('addTime', parentSpanInst);
    try {
      bh.input.result = await MongoPersistance.getInstance().updateOne(
        'sd_5oURo7dOvYTQ7fSX',
        'categories',
        bh.local.filter,
        bh.local.document,
        bh.input.options
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_fQvLg2aTJfBvqNXd(bh, parentSpanInst);
      //appendnew_next_addTime
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BEAeVcIEifFViP1q',
        spanInst,
        'addTime'
      );
    }
  }

  async sd_fQvLg2aTJfBvqNXd(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.input.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fQvLg2aTJfBvqNXd');
    }
  }

  async sd_9J2vpiizIQnoIIBU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9J2vpiizIQnoIIBU',
      parentSpanInst
    );
    try {
      bh.input.pipeline = [
        {
          $group: {
            _id: '$type',
            count: { $sum: 1 },
          },
        },
      ];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.countAllRecipes(bh, parentSpanInst);
      //appendnew_next_sd_9J2vpiizIQnoIIBU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9J2vpiizIQnoIIBU',
        spanInst,
        'sd_9J2vpiizIQnoIIBU'
      );
    }
  }

  async countAllRecipes(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'countAllRecipes',
      parentSpanInst
    );
    try {
      bh.input.result = await MongoPersistance.getInstance().aggregate(
        'sd_4YvRRtlD4kQUpHLC',
        'alltypes',
        bh.input.pipeline,
        bh.input.options
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_UGz2RKbG9EIHGMS9(bh, parentSpanInst);
      //appendnew_next_countAllRecipes
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5q2Eo0I2nwrv9lqG',
        spanInst,
        'countAllRecipes'
      );
    }
  }

  async sd_UGz2RKbG9EIHGMS9(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.input.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UGz2RKbG9EIHGMS9');
    }
  }

  async sd_FrQU3kwVl0hsNxpA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FrQU3kwVl0hsNxpA',
      parentSpanInst
    );
    try {
      bh.input.query = {
        name: { $regex: `${bh.input.params.name}`, $options: 'i' },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_tuJyHadWzEAqqSoj(bh, parentSpanInst);
      //appendnew_next_sd_FrQU3kwVl0hsNxpA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FrQU3kwVl0hsNxpA',
        spanInst,
        'sd_FrQU3kwVl0hsNxpA'
      );
    }
  }

  async sd_tuJyHadWzEAqqSoj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tuJyHadWzEAqqSoj',
      parentSpanInst
    );
    try {
      bh.input.result = await MongoPersistance.getInstance().find(
        'sd_4YvRRtlD4kQUpHLC',
        'alltypes',
        bh.input.query,
        bh.input.options
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_PsNvrFSTnE4lJ3hq(bh, parentSpanInst);
      //appendnew_next_sd_tuJyHadWzEAqqSoj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tuJyHadWzEAqqSoj',
        spanInst,
        'sd_tuJyHadWzEAqqSoj'
      );
    }
  }

  async sd_PsNvrFSTnE4lJ3hq(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.input.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PsNvrFSTnE4lJ3hq');
    }
  }

  async sd_EA38FPKZKFBvi61p(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EA38FPKZKFBvi61p',
      parentSpanInst
    );
    try {
      bh.local.filter = {
        link: { $regex: `${bh.input.params.name}`, $options: 'i' },
      };
      bh.local.document = { $set: { timeSpent: bh.input.params.timespent } };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.addTimeSpent(bh, parentSpanInst);
      //appendnew_next_sd_EA38FPKZKFBvi61p
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EA38FPKZKFBvi61p',
        spanInst,
        'sd_EA38FPKZKFBvi61p'
      );
    }
  }

  async addTimeSpent(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'addTimeSpent',
      parentSpanInst
    );
    try {
      bh.input.result = await MongoPersistance.getInstance().updateOne(
        'sd_Vs0MXWGrfgQ1DMl6',
        'new-alltypes',
        bh.local.filter,
        bh.local.document,
        bh.input.options
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_EJA8VydRZXUGDZ7v(bh, parentSpanInst);
      //appendnew_next_addTimeSpent
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2y2KrgDbfBZTv1Lb',
        spanInst,
        'addTimeSpent'
      );
    }
  }

  async sd_EJA8VydRZXUGDZ7v(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.input.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EJA8VydRZXUGDZ7v');
    }
  }

  async sd_CRVhHmgA1HRXFRgs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CRVhHmgA1HRXFRgs',
      parentSpanInst
    );
    try {
      bh.local.filter = {
        name: { $regex: `${bh.input.params.name}`, $options: 'i' },
      };
      bh.local.document = { $inc: { score: 1 } };
      console.log(bh.input.params.name);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.addCountforRecipe(bh, parentSpanInst);
      //appendnew_next_sd_CRVhHmgA1HRXFRgs
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CRVhHmgA1HRXFRgs',
        spanInst,
        'sd_CRVhHmgA1HRXFRgs'
      );
    }
  }

  async addCountforRecipe(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'addCountforRecipe',
      parentSpanInst
    );
    try {
      bh.input.result = await MongoPersistance.getInstance().updateOne(
        'sd_5oURo7dOvYTQ7fSX',
        'new-alltypes',
        bh.local.filter,
        bh.local.document,
        bh.input.options
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_s80OMjIfDoz8oYN1(bh, parentSpanInst);
      //appendnew_next_addCountforRecipe
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gDXRoAwK4196ye4d',
        spanInst,
        'addCountforRecipe'
      );
    }
  }

  async sd_s80OMjIfDoz8oYN1(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.input.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_s80OMjIfDoz8oYN1');
    }
  }

  async sd_6XhPAVJoIAKqkdgk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6XhPAVJoIAKqkdgk',
      parentSpanInst
    );
    try {
      bh.local.resp = 'success';

      bh.count = bh.input.body.length;
      bh.local.iteration = 0;
      console.log(bh.input.params, 'params');
      if (bh.input.params.specific == 'category') {
        bh.local.url = 'http://localhost:8081/api/addadmincategory';
      } else if (bh.input.params.specific == 'types') {
        bh.local.url = 'http://localhost:8081/api/addadminrecipe';
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_e3xH0PchzbBA0GVS(bh, parentSpanInst);
      //appendnew_next_sd_6XhPAVJoIAKqkdgk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6XhPAVJoIAKqkdgk',
        spanInst,
        'sd_6XhPAVJoIAKqkdgk'
      );
    }
  }

  async sd_e3xH0PchzbBA0GVS(bh, parentSpanInst) {
    try {
      let requestOptions = {
        url: bh.local.url,
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.input.body[bh.local.iteration],
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        rejectUnauthorized: undefined,
        useQuerystring: false,
      };
      if (!false) {
        requestOptions.rejectUnauthorized = false;
      }
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.resp = responseMsg;

      bh = await this.sd_JjqNxJtKd4Dzsefx(bh, parentSpanInst);
      //appendnew_next_sd_e3xH0PchzbBA0GVS
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_e3xH0PchzbBA0GVS');
    }
  }

  async sd_JjqNxJtKd4Dzsefx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JjqNxJtKd4Dzsefx',
      parentSpanInst
    );
    try {
      bh.local.iteration++;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_QssXtgMBLptFb4s4(bh, parentSpanInst);
      //appendnew_next_sd_JjqNxJtKd4Dzsefx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JjqNxJtKd4Dzsefx',
        spanInst,
        'sd_JjqNxJtKd4Dzsefx'
      );
    }
  }

  async sd_QssXtgMBLptFb4s4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QssXtgMBLptFb4s4',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['lt'](
          bh.local.iteration,
          bh.count,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_e3xH0PchzbBA0GVS(bh, parentSpanInst);
      } else if (
        this.sdService.operators['eq'](
          bh.local.iteration,
          bh.count,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Z6ukeaPsixTJtIy5(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QssXtgMBLptFb4s4',
        spanInst,
        'sd_QssXtgMBLptFb4s4'
      );
    }
  }

  async sd_Z6ukeaPsixTJtIy5(bh, parentSpanInst) {
    try {
      bh.web.res.status(202).send(bh.local.resp);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Z6ukeaPsixTJtIy5');
    }
  }

  async registerOut(bh, parentSpanInst) {
    try {
      bh.web.res.status(202).send(bh.input.body.challenge);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_o14tJYfnt89wAoY6');
    }
  }

  async sd_QpgwEGHleG2kxVWY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QpgwEGHleG2kxVWY',
      parentSpanInst
    );
    try {
      bh.input.response = {
        link: '/home/auth',
        message: 'Registered Success!',
      };

      this.tracerService.sendData(spanInst, bh);
      await this.responseOut(bh, parentSpanInst);
      //appendnew_next_sd_QpgwEGHleG2kxVWY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QpgwEGHleG2kxVWY',
        spanInst,
        'sd_QpgwEGHleG2kxVWY'
      );
    }
  }

  async responseOut(bh, parentSpanInst) {
    try {
      bh.web.res.status(202).send(bh.input.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qpS33XKbsRbjx62S');
    }
  }

  async logOut(bh, parentSpanInst) {
    try {
      bh.web.res.status(202).send(bh.input.body.challenge);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hnBEmezFJl6A6oL6');
    }
  }

  async logout(bh, parentSpanInst) {
    try {
      bh.web.res.status(202).send(bh.input.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_iUS67PKzs27H2NM9');
    }
  }

  async optionsandFilter(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'optionsandFilter',
      parentSpanInst
    );
    try {
      bh.local.options = {};
      bh.local.filter = {};

      this.tracerService.sendData(spanInst, bh);
      bh = await this.addRecipess(bh, parentSpanInst);
      //appendnew_next_optionsandFilter
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WwA7Ru9I6dHFbcea',
        spanInst,
        'optionsandFilter'
      );
    }
  }

  async addRecipess(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'addRecipess',
      parentSpanInst
    );
    try {
      bh.local.res = await MongoPersistance.getInstance().insertOne(
        'sd_5oURo7dOvYTQ7fSX',
        'categories',
        bh.input.body,
        bh.local.options
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_UK1A3pXA5gy6zadA(bh, parentSpanInst);
      //appendnew_next_addRecipess
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_E5lMCArdMNNSbb2j',
        spanInst,
        'addRecipess'
      );
    }
  }

  async sd_UK1A3pXA5gy6zadA(bh, parentSpanInst) {
    try {
      bh.web.res.status(202).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UK1A3pXA5gy6zadA');
    }
  }

  async sd_nIZStPw1dv8CCj7a(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nIZStPw1dv8CCj7a',
      parentSpanInst
    );
    try {
      bh.input.loader = 0;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_nIZStPw1dv8CCj7a
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nIZStPw1dv8CCj7a',
        spanInst,
        'sd_nIZStPw1dv8CCj7a'
      );
    }
  }

  async queryandOptionsSett(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'queryandOptionsSett',
      parentSpanInst
    );
    try {
      bh.input.mongoQuery = {};
      bh.input.options = {};

      this.tracerService.sendData(spanInst, bh);
      bh = await this.getNotifier(bh, parentSpanInst);
      //appendnew_next_queryandOptionsSett
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1f3e3D2sAnPQNb4y',
        spanInst,
        'queryandOptionsSett'
      );
    }
  }

  async getNotifier(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getNotifier',
      parentSpanInst
    );
    try {
      bh.input.result = await MongoPersistance.getInstance().find(
        'sd_4YvRRtlD4kQUpHLC',
        'notifier',
        bh.input.mongoQuery,
        bh.input.options
      );
      this.tracerService.sendData(spanInst, bh);
      await this.resps(bh, parentSpanInst);
      //appendnew_next_getNotifier
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AKzuL71o7TSuYXhP',
        spanInst,
        'getNotifier'
      );
    }
  }

  async resps(bh, parentSpanInst) {
    try {
      bh.web.res.status(202).send(bh.input.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8zq6QrkLgQF3t3nY');
    }
  }

  async sd_dV4QbIv5D1j0VluF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dV4QbIv5D1j0VluF',
      parentSpanInst
    );
    try {
      bh.input.mongoQuery = {};
      bh.input.options = {};

      this.tracerService.sendData(spanInst, bh);
      bh = await this.notifyDB(bh, parentSpanInst);
      //appendnew_next_sd_dV4QbIv5D1j0VluF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dV4QbIv5D1j0VluF',
        spanInst,
        'sd_dV4QbIv5D1j0VluF'
      );
    }
  }

  async notifyDB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('notifyDB', parentSpanInst);
    try {
      bh.input.result = await MongoPersistance.getInstance().find(
        'sd_4YvRRtlD4kQUpHLC',
        'notifier',
        bh.input.mongoQuery,
        bh.input.options
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_yzxsc6SM75p5UaKJ(bh, parentSpanInst);
      //appendnew_next_notifyDB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_f1RPWZqGa8LrYU2B',
        spanInst,
        'notifyDB'
      );
    }
  }

  async sd_yzxsc6SM75p5UaKJ(bh, parentSpanInst) {
    try {
      bh.web.res.status(202).send(bh.input);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yzxsc6SM75p5UaKJ');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src, parentSpanInst?, functionName?) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_TemplateAPIs_Catch
}
