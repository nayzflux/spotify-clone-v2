"use client";

import React, {useState} from 'react'
import {createClientComponentClient} from '@supabase/auth-helpers-nextjs';
import {Database} from '@/types/types_db';
import {SessionContextProvider} from "@supabase/auth-helpers-react";

interface SupabaseProviderProps {
    children: React.ReactNode
}

const SupabaseProvider = ({children}: SupabaseProviderProps) => {
    const [supabaseClient] = useState(() =>
        createClientComponentClient<Database>()
    )

    return (
        <SessionContextProvider supabaseClient={supabaseClient}>
            {children}
        </SessionContextProvider>
    )
}
export default SupabaseProvider
