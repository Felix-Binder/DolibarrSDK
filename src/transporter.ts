import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import type { DolibarrOperator } from './types';

export type TransporterResponse<T> = {
	status: number;
	data?: T;
};

export type TransporterConfig = {
    url: string,
    token: string | null,
    headers?: Record<string, string|number>,
    params?: Record<string, string|number>
};

export class Transporter {
    private axios: AxiosInstance;
    private config: TransporterConfig;

    constructor(config: TransporterConfig) {
        this.config = config

        this.axios = axios.create({
			baseURL: this.config.url,
			headers: this.config.headers,
			params: {
                "DOLAPIKEY": this.config.token,
                ...this.config.params
            }
		});
    }

    protected async request<T=any>(
        method: AxiosRequestConfig["method"],
        path: string,
		data?: Record<string, any>,
        options?: AxiosRequestConfig,
    ): Promise<TransporterResponse<T> | undefined> {
        try {
            const config: AxiosRequestConfig  = ({
                method: method,
                url: path,
                data: data,
                ...options
            });

            const response = await this.axios.request(config);

            const content = {
                status: response.status,
                data: response.data
            };

            return content;
        } catch (error) {
            if (!error || error instanceof Error === false) {
                throw error;
            }

            if (axios.isAxiosError(error)) {
                const data = error.response?.data as any;
                if (data.error) throw data?.error;
            }

            throw error 
        }
    }

    get url(): string {
		return this.config.url;
	}

    async get<T = any>(operator: DolibarrOperator, path="/", options?: AxiosRequestConfig): Promise<TransporterResponse<T>|undefined> {
		return await this.request('get', `${operator}${path}`, undefined, options);
	}

	async head<T = any>(operator: DolibarrOperator, path="&", options?: AxiosRequestConfig): Promise<TransporterResponse<T>|undefined> {
		return await this.request('head', `${operator}${path}`, undefined, options);
	}

	async options<T = any>(operator: DolibarrOperator, path="/", options?: AxiosRequestConfig): Promise<TransporterResponse<T>|undefined> {
		return await this.request('options', `${operator}${path}`, undefined, options);
	}

	async delete<T = any, D = any>(operator: DolibarrOperator, path="/", data?: D, options?: AxiosRequestConfig): Promise<TransporterResponse<T>|undefined> {
		return await this.request('delete', `${operator}${path}`, data, options);
	}

	async put<T = any, D = any>(operator: DolibarrOperator, path="/", data?: D, options?: AxiosRequestConfig): Promise<TransporterResponse<T>|undefined> {
		return await this.request('put', `${operator}${path}`, data, options);
	}

	async post<T = any, D = any>(operator: DolibarrOperator, path="/", data?: D, options?: AxiosRequestConfig): Promise<TransporterResponse<T>|undefined> {
		return await this.request('post', `${operator}${path}`, data, options);
	}

	async patch<T = any, D = any>(operator: DolibarrOperator, path="/", data?: D, options?: AxiosRequestConfig): Promise<TransporterResponse<T>|undefined> {
		return await this.request('patch', `${operator}${path}`, data, options);
	}
}