import { MarcaModel } from "@/model/MarcaModel";
import axios, {AxiosInstance} from "axios";

export class MarcaClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: 'http://localhost:8080/api/marca',
      headers: {'Content-Type' : 'application/json'}
    });
  }

  public async findById(id: number) : Promise<MarcaModel> {
    try {
      return (await this.axiosClient.get<MarcaModel>(`/${id}`)).data
    }
    catch (error: any) {
      return Promise.reject(error.reponse)
    }
  }

  public async findAll(): Promise<MarcaModel[]> {
    try {
      return (await this.axiosClient.get<MarcaModel[]>(`/lista`)).data
    }
    catch(error: any) {
      return Promise.reject(error.reponse)
    }
  }

}

export default new MarcaClient();
