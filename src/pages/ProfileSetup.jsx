import { useState } from "react";

function ProfileSetup({ saveProfile }) {
  const [name, setName] =
    useState("");

  const [age, setAge] =
    useState("");

  const [education, setEducation] =
    useState("");

  const [
    experience,
    setExperience
  ] = useState("Fresher");

  const handleSubmit = () => {
    if (
      !name ||
      !age ||
      !education
    ) {
      alert(
        "Please fill all fields."
      );
      return;
    }

    saveProfile({
      name,
      age,
      education,
      experience
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent:
          "center",
        alignItems:
          "center",
        background:
          "linear-gradient(to right, #4f46e5, #7c3aed)"
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "15px",
          width: "400px",
          textAlign: "center"
        }}
      >
        <h1>
          Complete Your Profile
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) =>
            setName(
              e.target.value
            )
          }
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px"
          }}
        />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) =>
            setAge(
              e.target.value
            )
          }
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px"
          }}
        />

        <select
          value={education}
          onChange={(e) =>
            setEducation(
              e.target.value
            )
          }
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px"
          }}
        >
          <option value="">
            Select Education
          </option>

          <option>
            10th
          </option>

          <option>
            12th
          </option>

          <option>
            Diploma
          </option>

          <option>
            BCA
          </option>

          <option>
            B.Tech
          </option>

          <option>
            MCA
          </option>

          <option>
            M.Tech
          </option>

          <option>
            MBA
          </option>

          <option>
            Other
          </option>
        </select>

        <select
          value={experience}
          onChange={(e) =>
            setExperience(
              e.target.value
            )
          }
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px"
          }}
        >
          <option>
            Fresher
          </option>

          <option>
            Beginner
          </option>

          <option>
            Intermediate
          </option>

          <option>
            Professional
          </option>
        </select>

        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            padding: "12px",
            cursor: "pointer"
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default ProfileSetup;