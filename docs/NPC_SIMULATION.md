# Living NPC Simulation

This document defines the most important simulation rule in Crownlands:

> **NPCs have their own lives. Orders interrupt or redirect those lives; they do not create the lives.**

## Current implementation snapshot

The current build already has 113 persistent actors, autonomous civilian schedules, 18 Royal Guards across three rotating shifts, officer/army roles, royal-order interruption/resume, a near/far simulation model, and save/resume for actors and active orders. The sections below remain the design contract for extending that foundation; items described with "should" or "eventually" are not necessarily fully implemented yet.

## Actor model

Every persistent NPC should eventually have:

- identity
- role/profession
- home/bed
- workplace
- faction/allegiance
- supervisor or commander where applicable
- schedule
- current task
- needs
- duty state
- rest state
- health
- morale
- loyalty
- inventory/equipment where relevant
- relationships where useful

The first implementation does not need full life-sim complexity, but the architecture should leave room for it.

## Daily behavior

A civilian should be able to do things such as:

- wake
- eat
- walk to work
- perform work
- carry goods
- speak with another NPC
- visit market
- return home
- rest
- sleep

A castle servant may:

- fetch food
- clean
- carry supplies
- prepare rooms
- deliver messages
- attend a royal event
- take a break

A merchant may:

- open stall
- receive deliveries
- trade
- visit warehouse
- eat
- close for the day
- return home

These routines should continue even when the player ignores them.

## Order model

Royal orders are high-priority jobs.

An order should contain at least:

- issuer
- target
- action
- destination/object
- priority
- issued time
- deadline if any
- completion condition
- interruption policy
- failure reason
- status

Suggested priority stack:

1. immediate survival
2. direct royal emergency order
3. active combat duty
4. normal royal order
5. officer/manager order
6. assigned job
7. personal needs
8. leisure/idling

When an order completes or is canceled, the NPC should resume the most sensible pending activity rather than freeze.

## Royal Guard

The Royal Guard is a professional household guard, not six permanent robots attached to the king.

The full design should use a **roster larger than the number currently on duty**.

Example states:

- throne duty
- king escort
- gate duty
- wall patrol
- inner-castle patrol
- meal
- sleep
- off-duty recreation
- training
- equipment maintenance
- emergency muster

Guards should rotate.

If six guards are required on current duty, the actual roster might contain 12–24 guards so one group can rest while another works.

The visible available guard count should therefore depend on:

- shift
- casualties
- sickness/injury
- special assignments
- leave/rest
- emergencies

### Guard living space

Guards should have:

- guard barracks/quarters
- beds
- mess/eating area
- armory access
- training area
- assigned posts

The player should be able to physically visit these spaces.

## Army

The army is much larger and structurally different from the Royal Guard.

It should have a hierarchy such as:

- King — ultimate authority
- Marshal / Lord Marshal — top military commander
- General or senior commander(s)
- Captains
- Sergeants
- soldiers

Terminology can be tuned to the final setting, but there must be a chain of command.

The king may give direct orders at any time, but normal military life should flow through officers.

Army routines include:

- training
- patrol
- garrison duty
- equipment maintenance
- meals
- sleep/rest
- supply loading
- marching
- scouting
- construction/fortification
- combat
- recovery

### Garrison and quarters

Soldiers need places to live near what they protect.

A major garrison should have:

- barracks
- beds
- mess hall
- armory
- storage
- training yard
- command room
- stable if mounted units exist
- medical/recovery area later

Units stationed far from the main castle should have local barracks, camps, forts, or billets.

## Officers

Officers allow the army and guard to function when the player is not micromanaging.

The king can give intent-level orders:

- "secure the eastern road"
- "prepare the army for war"
- "increase patrols at night"
- "escort this envoy safely"
- "hold the bridge"
- "send scouts toward the rival castle"

The responsible commander should translate that order into lower-level unit tasks.

The player can still override details personally.

## Castle workforce

The same principle applies to non-military roles:

- steward
- treasurer
- blacksmith
- stable master
- cooks
- farmers
- merchants
- builders
- messengers
- healers
- servants
- clergy
- diplomats
- scribes
- jailers
- hunters
- millers
- traders

The castle economy should physically depend on these people moving goods and doing work.

## Simulation performance rule

This is a Pixel-class mobile game. Do not run full high-frequency AI for every actor at all distances.

Use simulation levels:

- **Near player:** full navigation, animation, detailed task execution.
- **Same district but not visible:** reduced update frequency.
- **Far district:** schedule/task simulation without full pathfinding.
- **Far world / rival realm:** aggregate strategic simulation.
- **When approaching:** reconstruct plausible physical state from the aggregate simulation.

The world should feel persistent without wasting mobile CPU/GPU.
