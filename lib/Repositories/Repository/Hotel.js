"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelRepository = void 0;
const Hotel_1 = require("../../Models/Hotel");
const KnexRepository_1 = require("../KnexRepository");
const hotel = new Hotel_1.Hotel();
class HotelRepository extends KnexRepository_1.KnexRepository {
    constructor() {
        super(hotel.tableName);
    }
}
exports.HotelRepository = HotelRepository;
