// this is a login register page only using firebase google authentication
import {db, signInWithGooglePopup} from "../../firebaseConfig";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "./user-context";
import {getDoc, doc, setDoc} from "firebase/firestore";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../../firebaseConfig";

export default function LoginRegister() {
    const userContext = useContext(UserContext);

    const [studentId, setStudentId] = useState(null);
    const [page, setPage] = useState(0);
    const [userState, setUserState] = useState(null);

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup().then((result) => {
            return result;
        }).catch((error) => {
            return error;
        });
        // get user from firestore if it exists
        const userDoc = doc(db, "users", response.user.email);
        const firestoreUser = await getDoc(userDoc).then((doc) => {
            if (doc.exists()) {
                return doc.data();
            } else {
                return null;
            }
        }).catch((error) => {
            return error;
        });

        if (firestoreUser && firestoreUser.studentId === "") {
            setPage(1);
            setUserState((user) => {
                return {...user, authUser: response.user}
            });
        } else {
            userContext.setUser(userState);
        }
    }

    const submitStudentId = e => {
        e.preventDefault();
        const userDoc = doc(db, "users", userState.authUser.email);
        setDoc(userDoc, {
            studentId: studentId,
            mail: userState.authUser.email
        }, {merge: true}).then(() => {
            userContext.setUser({...userState, firebaseUser: {studentId: studentId}});
        }).catch((error) => {
            console.log("studentId add error", error);
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user && userState === null) {
                setUserState((userState) => {
                    return {...userState, authUser: user}
                });
                const firebaseUserDoc = doc(db, "users", user.email);
                const firebaseUser = getDoc(firebaseUserDoc).then((doc) => {
                    if (!doc.exists()) {
                        setPage(1);
                    } else {
                        userContext.setUser({authUser: user, firebaseUser: doc.data()});
                    }
                });
            } else if (user && userState !== null) {
                console.log(2)
                setPage(2);
            }
        });

    }, []);

    if (page === 0) {
        return (
            <div className={"flex items-center justify-center w-full h-dvh flex-col"}>
                <div className={"p-20 bg-gray-50 text-black rounded-xl flex items-center justify-center flex-col gap-4"}>
                    <button onClick={logGoogleUser} className={"border-2 border-gray-400 p-2 rounded-xl opacity-60 hover:opacity-100 transition-opacity"}>
                        <img src="/images/googlelogo.svg" alt="" className={"w-10 h-10 inline-block me-2"}/>
                        Google İle Giriş Yap
                    </button>
                    <p className={"text-black text-xs"}>Bir sonraki adımda sizden öğrenci numaranızı isteyeceğiz.</p>
                </div>
            </div>
        )
    }

    if (page === 1) {
        return (
            <form className={"flex w-full min-h-dvh items-center justify-center flex-col gap-3"}>
                <input type="number" placeholder={"Öğrenci Numarası Giriniz"}
                       className={"p-3 border-1 border-black rounded-full outline-none w-[300px] focus:shadow-xl text-black"}
                       value={studentId} onChange={(e) => setStudentId(e.target.value)}/>
                <button type={"submit"}
                        onClick={(e) => submitStudentId(e)}
                        className={"p-3 bg-white text-rose-800 rounded-full outline-none w-[100px] hover:bg-green-500 hover:text-white hover:border-white border-1 border-rose-800 transition-all"}
                >Kaydet
                </button>
            </form>
        )
    }

    if (page === 2) {
        return (
            <div>
                <h1>Register</h1>
                <button onClick={() => setPage(0)}>page 2</button>
            </div>
        )
    }

}