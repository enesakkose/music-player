import React, { useState, useEffect } from 'react'
import axios from 'axios'

const options = {
    headers: {
      'X-RapidAPI-Key': '11003ffe37msh1ebfc217237d84bp1b8e38jsn1ded668c1a2b',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
}

const baseUrl = 'https://shazam-core.p.rapidapi.com/v1'

