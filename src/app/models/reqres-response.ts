export interface ReqResResponse {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        reqUser[];
    support:     Support;
}

 interface reqUser {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}

 interface Support {
    url:  string;
    text: string;
}
