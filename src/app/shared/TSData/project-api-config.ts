import { ApiConfig } from './api-config';
export class ProjectApiConfig extends ApiConfig {
  isProduction = false;
  developmentBaseUrl = "http://localhost:8000/api";
  productionBaseUrl = "http://172.17.227.183:8000";
}
